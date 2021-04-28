import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ver-contactos-p',
  templateUrl: './ver-contactos-p.page.html',
  styleUrls: ['./ver-contactos-p.page.scss'],
})
export class VerContactosPPage  {

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
    .collection ("proveedor")
    .snapshotChanges ()
    .subscribe (data => {
      this.registro = data.map(e => {
      return {
        id: e.payload.doc.id,
        users: e.payload.doc.data()["users"],
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

async deletePost(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("proveedor/" + id).delete();

  (await loader).dismiss();
}
 
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}
}