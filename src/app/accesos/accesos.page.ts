import { Component, OnInit } from '@angular/core';
import { VisitaI } from '../models/visita.interface';
import { VisitaService2 } from '../services/visita.service2';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.page.html',
  styleUrls: ['./accesos.page.scss'],
})
export class AccesosPage implements OnInit {
  visitas: VisitaI[];
  registro : any;
  id: any;
  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private authService: AuthService,
    private visitaService:VisitaService2,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private ToastCtrl: ToastController,

    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getPost();
    this.visitaService.getVisitas().subscribe(res => this.visitas = res);

    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid;
     });
        
  }


  async getPost(){
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });
  
    loader.present();
    try {
      this.firestore
      .collection ("visitaproveedoradmin")
      .snapshotChanges ()
      .subscribe (data => {
        this.registro = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()["nombre"],
          tipo: e.payload.doc.data()["tipo"],
          fecha: e.payload.doc.data()["fecha"],
  
        };
      });
   
      loader.dismiss();
      });
     } catch (e) {
      this.showToast(e);
  
    }
  }
  
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}

async onRemovep(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("visitaproveedoradmin/" + id).delete();

  (await loader).dismiss();
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
}
