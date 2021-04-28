import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../models/numac.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuracion-config-condomino',
  templateUrl: './configuracion-config-condomino.page.html',
  styleUrls: ['./configuracion-config-condomino.page.scss'],
})
export class ConfiguracionConfigCondominoPage implements OnInit {

  post = {} as Cuentas;
  id: any;
  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private authService: AuthService,
              private firestore: AngularFirestore
              ) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  } 


  async createPostBanco(post: Cuentas){
    if(this.formValidationBanco()){
      let loader = this.loadingCtrl.create({
        message: "Registrando Cuenta..."
      });
      (await loader).present();

      try {
await this.firestore.collection("banco").add(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
        
      //redirigir a home

      // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");


    }
  }
//conceptos

async createPostConceptos(post: Cuentas){
  if(this.formValidationConceptos()){
    let loader = this.loadingCtrl.create({
      message: "Registrando Cuenta..."
    });
    (await loader).present();

    try {
await this.firestore.collection("conceptos").add(post);
    } catch (e) {
      this.showToast(e);
    }
    //cerrar loading
    (await loader).dismiss();
      
    //redirigir a home

    // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");


  } 
}

//cuotas

async createPostCuotas(post: Cuentas){
  if(this.formValidationCuotas()){
    let loader = this.loadingCtrl.create({
      message: "Registrando Cuenta..."
    });
    (await loader).present();

    try {
await this.firestore.collection("cuotas").add(post);
    } catch (e) {
      this.showToast(e);
    }
    //cerrar loading
    (await loader).dismiss();
      
    //redirigir a home

    // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");


  }
}




//----------------------------------
  
 formValidationBanco(){
   if(!this.post.banco){
     this.showToast("Porfavor Ingresa Banco");
     return false;
   }      
   if(!this.post.cuenta){
     this.showToast("Porfavor Ingresa N° de Cuenta");
     return false;
   }
   if(!this.post.tarjeta){
     this.showToast("Porfavor Ingresa N° tarjeta");
    return false;
 }
 if(!this.post.clave){
   this.showToast("Porfavor Ingresa la Clave");
   return false;
 }

      return true;
    }

    //conceptos

     
 formValidationConceptos(){
 if(!this.post.mantenimiento){
 this.showToast("Porfavor Ingresa $ Mtto.");
 return false;
 }
 if(!this.post.seguridad){
 this.showToast("Porfavor Ingresa $ Seguridad");
 return false;
 }
 if(!this.post.luz){
 this.showToast("Porfavor Ingresa $ Luz");
 return false;
 }
return true;
}

//cuotas


     
formValidationCuotas(){
  if(!this.post.diapago){
 this.showToast("Porfavor Ingresa $ Seguridad");
 return false;
 }
 if(!this.post.pagotardio){
 this.showToast("Porfavor Ingresa $ Seguridad");
 return false;
 }
 return true;
 }

    //-------------------------------


    
    showToast(message: string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
    
  }
}






