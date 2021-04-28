import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
//import { LoadingController, ToastController } from '@ionic/angular';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {

  id: any;
  //registro : any;
  constructor(private afAuth: AuthService) { }


  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
}
// ionViewWillEnter(){
//   this.getPost();
// }

// async getPost(){
//   let loader = await this.loadingCtrl.create({
//     message: "Espera un momento... "
//   });

//   loader.present();
//   try {
//     this.firestore
//     .collection ("condomino")
//     .snapshotChanges ()
//     .subscribe (data => {
//       this.registro = data.map(e => {
//       return {
//         id: e.payload.doc.id,
//         nombre: e.payload.doc.data()["nombre"]
//       };
//     });

//     loader.dismiss();
//     });
//    } catch (e) {
//     this.showToast(e);

//   }
// }

// showToast (message:string){
//   this.ToastCtrl.create({
//     message: message, 
//     duration: 3000
//   })
//   .then( ToastData => ToastData.present());
// }
//}
