import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import * as firebase from "firebase";
import { ChatService } from '../services/chat.service';
import { message } from '../models/message.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgStyle } from '@angular/common';



@Component({
  selector: 'app-mensajes-contactos',
  templateUrl: './mensajes-contactos.page.html',
  styleUrls: ['./mensajes-contactos.page.scss'],
})


export class MensajesContactosPage implements OnInit {
  // //otros usuarios
   users: any;
   id: any;
  // o_uid: string;
  // //mi usuario
  uid: any;
  email: any;
  // //arreglo de chat
  // chat = [];
  // public message : message;
  room = [];
  // textMsg: string;

  constructor(private authService: AuthService,
    private afAuth: AuthService,
              private loadingCtrl: LoadingController,
              private firestore: AngularFirestore,
              private ToastCtrl: ToastController) {
              this.uid = localStorage.getItem("uid");
    // this.users = sessionStorage.getItem("users");
    // this.o_uid = sessionStorage.getItem("uid");
  }

  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    this.authService.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.email = user.email;
      this.users = user.displayName;
      console.log(user.uid, user.email, user.displayName)
    });
  }
  ionViewWillEnter() {
    this.getPost();
  }

  async getPost() {
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });

    loader.present();
    try {
      this.firestore
        .collection("condomino")
        .snapshotChanges()
        .subscribe(data => {
          this.room = data.map(e => {
            return {
              id: e.payload.doc.id,
              chat: e.payload.doc.data()["chat"],
              users: e.payload.doc.data()["users"]
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

    await this.firestore.doc("condomino/" + id).delete();

    (await loader).dismiss();
  }

  showToast(message: string) {
    this.ToastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(ToastData => ToastData.present());
  }
}
  



// firebase.firestore().collection("chats").doc("uid").collection("chats").orderBy("time").onSnapshot(snap => {
//   this.chats = [];
//   snap.forEach(child=>{
//     this.chats.push(child.data());
//   });
// });
// }

// ngOnInit(){ 
// this.authService.getUserAuth().subscribe(user => {
//   this.uid = user.uid;
//   console.log(user.uid)
//  });
// }

// send(){
// //coleccion de usuario
// firebase.firestore().collection("chats").doc("uid").collection("uid").add({
//   time: Date.now,
//   uid: this.uid,
//   msg: this.textMsg
// });

// //colleccion de otro usuario
// firebase.firestore().collection("chats").doc("uid").collection("uid").add({
//   time: Date.now,
//   uid: this.uid,
//   msg: this.textMsg
// }).then(() => {
//   this.textMsg="";
// })
// }