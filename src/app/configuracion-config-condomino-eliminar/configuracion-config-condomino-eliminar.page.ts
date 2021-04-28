import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuracion-config-condomino-eliminar',
  templateUrl: './configuracion-config-condomino-eliminar.page.html',
  styleUrls: ['./configuracion-config-condomino-eliminar.page.scss'],
})
export class ConfiguracionConfigCondominoEliminarPage implements OnInit{
  id: any;
  bank: any;
  concept: any;
  cuta: any;
  constructor(  private toastCtrl: ToastController,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private afAuth: AuthService
             ) {}
             ngOnInit() {
              this.afAuth.getUserAuth().subscribe(user => {
                this.id = user.uid
              });
            }

  ionViewWillEnter(){
    this.getPosts();
    this.getPostsb();
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
      .collection("cuotas")
      .snapshotChanges()
      .subscribe(data => {
        this.cuta = data.map(e => {
          return {
            id: e.payload.doc.id,
            diapago: e.payload.doc.data()["diapago"],
            luz: e.payload.doc.data()["luz"],
            mantenimiento: e.payload.doc.data()["mantenimiento"],
            seguridad: e.payload.doc.data()["seguridad"],
            pagotardio: e.payload.doc.data()["pagotardio"]
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

  await this.firestore.doc("cuotas/" + id).delete();

  (await loader).dismiss();
}
//-----------agregar

  async getPostsb(){
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
//-----------agregar
  async getPosts(){
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();

    try {
      this.firestore
      .collection("banco")
      .snapshotChanges()
      .subscribe(data => {
        this.bank = data.map(e => {
          return {
            id: e.payload.doc.id,
            banco: e.payload.doc.data()["banco"],
            clave: e.payload.doc.data()["clave"],
            tarjeta: e.payload.doc.data()["tarjeta"],
            cuenta: e.payload.doc.data()["cuenta"],
            saldocuenta: e.payload.doc.data()["saldocuenta"]
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

async deletePost(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("banco/" + id).delete();

  (await loader).dismiss();
}

async deletePostb(id: string) {
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