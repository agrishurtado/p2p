import { Component, OnInit } from '@angular/core';
import { VisitaI }from '../models/visita.interface';
import { VisitaService2 } from '../services/visita.service2'
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Balance} from '../models/balance.model'



@Component({
  selector: 'app-accesos-registrar-visita',
  templateUrl: './accesos-registrar-visita.page.html',
  styleUrls: ['./accesos-registrar-visita.page.scss'],
})
export class AccesosRegistrarVisitaPage implements OnInit {

  public textToCode: string;
  public myAngularQRCode: string = null;
  fecha: Date= new Date();
  visita: VisitaI = {
    nombre: "",
    fecha: null,
    tipoFecha: '',
    clave: '',
    tipo: '',
    domicilio:'',
    who:'admin'
    
  };
  
  
  visitaId= null;
  post = {} as Balance;

  id: any;
  registro :  any;

  constructor(private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private nav: NavController,
    private authService: AuthService,
    private visitaService: VisitaService2,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,


  ) { }

  ngOnInit(){   
    this.getPostv();
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    this.visitaId = this.route.snapshot.params['id'];
    if(this.visitaId){
      this.loadVisita();
    }
    
  }

  async loadVisita(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.visitaService.getVisita(this.visitaId).subscribe(res => {
      loading.dismiss();
      this.visita = res;
    });
  }

  async saveVisita(){
    const loading = await this.loadingController.create({
      message: 'Guardando...'
    });
    await loading.present();
    if(this.visitaId){
      this.visitaService.updateVisita(this.visita, this.visitaId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/accesos');
      });
    }
    else{
      if(this.visita.tipo== "proveedor"){
        this.visitaService.addVisitaP(this.visita).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/accesos');
        });
          
      }
      else{
      this.visitaService.addVisita(this.visita).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/accesos');
      });
    }    }
  }

  async onRemove(idVisita:string){
    const alert = await this.alertCtrl.create({
        message: 'Ésta acción eliminará la visita, ¿Continuar?',
        buttons: [
          {
              text: 'Si',
              handler: () => {
                this.visitaService.removeVisita(idVisita);
                this.nav.navigateForward('/accesos');
              }
          },            
            {
              text: 'No',
              handler: () => {
            }
          }
        ]
    });
    await alert.present();
  }

  async getPostv(){
  
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });
  
    loader.present();
    try {
      this.firestore
      
// ya no esta la tabla usuariocondomino de donde sacamos los domicilios por eso los tomo 
// de esta otra condomino 
.collection ("condomino")
      .snapshotChanges ()
      .subscribe (data => {
        this.registro = data.map(e => {
        return {
          id: e.payload.doc.id,        
          domicilio: e.payload.doc.data()["domicilio"],
         
  
         
  
        };
      });
      
      loader.dismiss();
      });
     } catch (e) {
      this.showToast(e);
  
    }
    // this.navCtrl.navigateForward('/balance');

  }
  
  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  
}


  createQRCode(){
    this.myAngularQRCode = this.visita.clave;
   // this.textToCode = "";
    console.log(this.myAngularQRCode)
  }

}