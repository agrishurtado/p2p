import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../models/numactres.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-configuracion-config-condomino-tres',
  templateUrl: './configuracion-config-condomino-tres.page.html',
  styleUrls: ['./configuracion-config-condomino-tres.page.scss'],
})
export class ConfiguracionConfigCondominoTresPage implements OnInit {

  post = {} as Cuenta;
  id: any;
  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private firestore: AngularFirestore
              ) { }

  ngOnInit() {} 


  async createPostVigilancia(post: Cuenta){
    if(this.formValidationVigilancia()){
      let loader = this.loadingCtrl.create({
        message: "Registrando Cuenta..."
      });
      (await loader).present();

      try {
await this.firestore.collection("vigilancia").add(post);
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

async createPostVisitas(post: Cuenta){
  if(this.formValidationVisitas()){
    let loader = this.loadingCtrl.create({
      message: "Registrando Cuenta..."
    });
    (await loader).present();

    try {
await this.firestore.collection("visitasConfiguracion").add(post);
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





//----------------------------------
  
 formValidationVigilancia(){
   if(!this.post.registrarplacas){
     this.showToast("Porfavor Ingresa permiso registro placas");
     return false;
   }      
   if(!this.post.pedirine){
     this.showToast("Porfavor Ingresa permiso pedir INE");
     return false;
   }
   if(!this.post.verdirectorioresidentes){
     this.showToast("Porfavor Ingresa permiso mostrar directorio");
    return false;
 }
 if(!this.post.recibirmensajescondominos){
   this.showToast("Porfavor Ingresa permiso resibir mensage condominos");
   return false;
 }
      return true;
    }

    //conceptos

     
 formValidationVisitas(){
 if(!this.post.agregartipovisita){
 this.showToast("Porfavor Ingresa el tipo de visita.");
 return false;
 }
 if(!this.post.accesososoloprogramados){
 this.showToast("Porfavor Ingresa el permiso de accesos programados ");
 return false;
 }
 if(!this.post.cantidadaccesosvehiculares){
  this.showToast("Porfavor Ingresa el numero de accesos vehiculares");
  return false;
}
return true;
}

//cuotas



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






