import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-configuracion-config-condomino-eliminar-dos',
  templateUrl: './configuracion-config-condomino-eliminar-dos.page.html',
  styleUrls: ['./configuracion-config-condomino-eliminar-dos.page.scss'],
})
export class ConfiguracionConfigCondominoEliminarDosPage  {

  concept: any;
  constructor(  private toastCtrl: ToastController,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore
             ) {}

  ionViewWillEnter(){
    this.getPostsc();
  } 
//-----------agregar
  async getPostsc(){
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();

    try {
      this.firestore
      .collection("conceptos")
      .snapshotChanges()
      .subscribe(data => {
        this.concept = data.map(e => {
          return {
            id: e.payload.doc.id,
            luz: e.payload.doc.data()["luz"],
            mantenimiento: e.payload.doc.data()["mantenimiento"],
            seguridad: e.payload.doc.data()["seguridad"]
          };
        });
        // desaparece loader
       loader.dismiss();
      });      
    } catch (e) {
      this.showToast(e);
    }
  }
//-----------borrar

async deletePostc(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("conceptos/" + id).delete();

  (await loader).dismiss();
}
//-----------loading

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
