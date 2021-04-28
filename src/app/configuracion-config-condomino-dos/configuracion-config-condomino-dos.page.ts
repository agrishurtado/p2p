import { Component } from '@angular/core';
import { Cuenta } from '../models/nummacdos.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuracion-config-condomino-dos',
  templateUrl: './configuracion-config-condomino-dos.page.html',
  styleUrls: ['./configuracion-config-condomino-dos.page.scss'],
})
export class ConfiguracionConfigCondominoDosPage {

  post = {} as Cuenta;
  id: any;
  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private autServ: AuthService,
              private firestore: AngularFirestore
              ) { }

  ngOnInit() {
    this.autServ.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  } 


  async createPostReservables(post: Cuenta){
    if(this.formValidationReservables()){
      let loader = this.loadingCtrl.create({
        message: "Registrando Cuenta..."
      });
      (await loader).present();

      try {
await this.firestore.collection("reservables").add(post);
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

async createPostMorosos(post: Cuenta){
  if(this.formValidationMorosos()){
    let loader = this.loadingCtrl.create({
      message: "Registrando Cuenta..."
    });
    (await loader).present();

    try {
await this.firestore.collection("morosos").add(post);
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

async createPostFolio(post: Cuenta){
  if(this.formValidationFolio()){
    let loader = this.loadingCtrl.create({
      message: "Registrando Cuenta..."
    });
    (await loader).present();

    try {
await this.firestore.collection("folio").add(post);
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
  
 formValidationReservables(){
   if(!this.post.nombre){
     this.showToast("Porfavor Ingresa nombre");
     return false;
   }      
   if(!this.post.costo){
     this.showToast("Porfavor Ingresa N° de costo");
     return false;
   }
   if(!this.post.horariodias){
     this.showToast("Porfavor Ingresa N° horario dias");
    return false;
 }
 if(!this.post.numreservasmes){
   this.showToast("Porfavor Ingresa la N° de reservaciones al mes");
   return false;
 }
 if(!this.post.numreservasano){
  this.showToast("Porfavor Ingresa la N° de reservaciones al año");
  return false;
}
// if(!this.post.generarSaldoReservar){
//   this.showToast("Porfavor Ingresa generar saldo al reservar");
//   return false;
// }

      return true;
    }

    //conceptos

     
 formValidationMorosos(){
 if(!this.post.puedereservar){
 this.showToast("Porfavor Ingresa el permiso de reservar.");
 return false;
 }
 if(!this.post.puederegistrarreserva){
 this.showToast("Porfavor Ingresa el permiso de registrar reserva");
 return false;
 }
 if(!this.post.mostrarlistamorosos){
  this.showToast("Porfavor Ingresa el permiso de ver moroso");
  return false;
}
return true;
}

//cuotas


     
formValidationFolio(){
  if(!this.post.generarfoliopago){
 this.showToast("Porfavor Ingresa si debe de generar folio");
 return false;
 }
 if(!this.post.letra){
 this.showToast("Porfavor Ingresa la letra en la que inicia los folios ");
 return false;
 }
 if(!this.post.numero){
  this.showToast("Porfavor Ingresa el numero en el que debe iniciar los folios");
  return false;
}
 return true;
 }

    //-------------------------------
    segmentChanged(event: any) {
      console.log('Segment changed', event);
    }

    
    showToast(message: string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
    
  }
}






