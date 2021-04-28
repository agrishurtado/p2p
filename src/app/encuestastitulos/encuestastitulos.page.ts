import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuestastitulos',
  templateUrl: './encuestastitulos.page.html',
  styleUrls: ['./encuestastitulos.page.scss'],
})
export class EncuestastitulosPage  {
  encuestas : any;
  refpagos: any;
 // consul: any = "Prueba 2";
  constructor( private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private route: Router,
                private ToastCtrl: ToastController) { }

ionViewWillEnter(){
  this.getPost();
}

 async loade(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  this.getPost();
  loader.dismiss();
}

async getPost(){
 
  try {
    this.refpagos = this.firestore.collection("preguntas", ref => ref.orderBy('fechainicio', 'asc'))
    this.refpagos
    .snapshotChanges ()
    .subscribe (data => {
      this.encuestas = data.map(e => {
      return {
        id: e.payload.doc.id,
        titulo: e.payload.doc.data()["titulo"],
        fechainicio: e.payload.doc.data()["fechainicio"]

      };
    });
    
    


    
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
}
