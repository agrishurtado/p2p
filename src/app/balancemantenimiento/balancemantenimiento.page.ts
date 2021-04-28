import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mantenimiento } from '../models/bancemantenimiento.model';
import { AuthService } from '../services/auth.service';
import { element } from 'protractor';
import { Autorizadoz } from '../models/pagosautorizadoz.model';


@Component({
  selector: 'app-balancemantenimiento',
  templateUrl: './balancemantenimiento.page.html',
  styleUrls: ['./balancemantenimiento.page.scss'],
})
export class BalancemantenimientoPage implements OnInit {
 registro2: any;
  registro :  any;
  post = {} as Mantenimiento;
  fecha: Date= new Date();
  id: any;
  
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private authService: AuthService,
    private firestore: AngularFirestore
    ) { }
ngOnInit(): void {
  this.getPostv();
  this.getPostById();
  this.authService.getUserAuth().subscribe(user => {
    this.id = user.uid
  });
}


    async crearbalancemantenimiento(post: Mantenimiento){
      // console.log(typeof this.post.fecha);
      if(this.formValidationBanco()){
        let loader = this.loadingCtrl.create({
          message: "Registrando Cuenta..."
        });
        (await loader).present();
  
        try {
          this.post.status="Autorizados";
          this.post.concepto="Mantenimiento";
          await this.firestore.collection("pagoMantenimiento").add(post);
        } catch (e) {
          this.showToast(e);
        }
        //cerrar loading
        (await loader).dismiss();
        // this.nav.navigateForward('/balance');

        //redirigir a home
  
        this.navCtrl.navigateRoot("/balance");
  
  
      }
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
    }
    val(post){
      this.crearbalancemantenimiento(post);
      this.createpagosautorizados(post);
    }
    async getPostById(){
      let loader = await this.loadingCtrl.create({
        message: "Espera un momento... "
      });    
      loader.present();
      try {
        this.firestore  
    .collection ("cuotas")
        .snapshotChanges ()
        .subscribe (data => {
          this.registro2 = data.map(e => {
          return {     
            mantenimiento: e.payload.doc.data()["mantenimiento"],    
          };
          
        });
        
        loader.dismiss();
        });
       } catch (e) {
        this.showToast(e);
    
      }
    }

    // metodo para archivar los  pagos autorizados o rechazados 
  async createpagosautorizados(post: Autorizadoz) {
    
      let loader = this.loadingCtrl.create({
        message: "Autorizando..."
      });
      (await loader).present();
      try {
        console.log(this.post);      
       post.usuario='admin';
        await this.firestore.collection(this.post.status).add(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();

    
  }

    formValidationBanco(){
      if(!this.post.importe){
        this.showToast("Porfavor Ingresa importe");
        return false;
      }  
      if(!this.post.fecha){
        this.showToast("Porfavor Ingresa mes");
        return false;
      }  
    
         return true;
       }

       showToast(message: string){
        this.toastCtrl.create({
          message: message,
          duration: 3000
        })
        .then(toastData => toastData.present());
      
    }
  
}