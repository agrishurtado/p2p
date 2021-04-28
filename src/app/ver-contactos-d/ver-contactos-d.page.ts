import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ver-contactos-d',
  templateUrl: './ver-contactos-d.page.html',
  styleUrls: ['./ver-contactos-d.page.scss'],
})
export class VerContactosDPage {

  registro : any;
  constructor( private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private ToastCtrl: ToastController) { }

ionViewWillEnter(){
  this.getPost();
}

async getPost(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("directiva")
    .snapshotChanges ()
    .subscribe (data => {
      this.registro = data.map(e => {
      return {
        id: e.payload.doc.id,
        nombre: e.payload.doc.data()["nombre"],
        domicilio: e.payload.doc.data()["domicilio"],
        telefono: e.payload.doc.data()["telefono"],
        tipo: e.payload.doc.data()["tipo"]

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
}

  