import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Reservar } from '../models/reservar.model';

@Component({
  selector: 'app-reservaciones-mis-reservaciones',
  templateUrl: './reservaciones-mis-reservaciones.page.html',
  styleUrls: ['./reservaciones-mis-reservaciones.page.scss'],
})
export class ReservacionesMisReservacionesPage {
  registro:any;
  areas: any;
  registro2:any;
  post = {} as Reservar;
  fecha: Date= new Date();
  refComunicados: any;
  refComunicados2: any;
  fechaparse: any;


 
  

  constructor(private loadingCtrl: LoadingController,
              private firestore: AngularFirestore,
              private ToastCtrl: ToastController) { }

             

ionViewWillEnter(){
  this.getPost();
  this.getPostCondominos();
}
// obtiene los registros hechos por condominos 
async getPostCondominos(){
  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  
  loader.present();
  try {
    this.refComunicados = this.firestore.collection("reservaciones", ref => ref.orderBy('fecha', 'desc'))

    this.refComunicados
    
    .snapshotChanges ()
    .subscribe (data => {      
      this.registro2 = data.map(e => {        
      return {
        id: e.payload.doc.id,       
        status: e.payload.doc.data()["status"],
        area: e.payload.doc.data()["area"],
        fecha: e.payload.doc.data()["fecha"],
        domicilio: e.payload.doc.data()["domicilio"],
        nota: e.payload.doc.data()["nota"]
      
      
      };
  
    });
  
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}
// obtencion de los registros hechos por admin 
async getPost(){
  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  
  loader.present();
  try {
    this.refComunicados2 = this.firestore.collection("reservar", ref => ref.orderBy('fecha', 'desc'))
    this.refComunicados2

    .snapshotChanges ()
    .subscribe (data => {      
      this.registro = data.map(e => {        
      return {
        id: e.payload.doc.id,       
        estatus: e.payload.doc.data()["estatus"],
        nombre: e.payload.doc.data()["nombre"],
        fecha: e.payload.doc.data()["fecha"],
        domicilio: e.payload.doc.data()["domicilio"],   
        nota: e.payload.doc.data()["nota"]      
      }      
    }); 
    
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}


// borrado de resistros de admin
async deletePost(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("reservar/" + id).delete();

  (await loader).dismiss();
}

// borrado de registro condominos 

async deletePostconcominos(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("reservaciones/" + id).delete();

  (await loader).dismiss();
}

async createPost(post: Reservar){
  // if(this.formValidation()){
  let loader = this.loadingCtrl.create({
  message: "Registrando Cuenta..."
  });
  (await loader).present();
  
  try {
  await this.firestore.collection("reservarArchivados").add(post);
  } catch (e) {
  this.showToast(e);
  }
  //cerrar loading
  (await loader).dismiss();
  
  //redirigir a home
  
  // this.navCtrl.navigateRoot("/reservaciones-mis-reservaciones");
  
  
  }
  // }






 
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}
}
