import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
     
@Component({
  selector: 'app-mensajes-privados',
  templateUrl: './mensajes-privados.page.html',
  styleUrls: ['./mensajes-privados.page.scss'],
})
export class MensajesPrivadosPage {
  //@ViewChild("content") content: any;
  userName: string;
  msg: string;
  messages = [];
  id: string;
  access: any;
  refpagos: any;
  constructor(public navCtrl: NavController,
    private firestore: AngularFirestore,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private ToastCtrl: ToastController) {
 
  }
  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid;
      this.userName = user.email
    });
  }
  ionViewWillEnter() {
    this.getPost();
    this.getMessages();
  }
  async getPost() {
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });

    loader.present();
    try {
      this.refpagos = this.firestore.collection("condomino", ref => ref.orderBy('domicilio', 'asc'))
      this.refpagos
        .snapshotChanges()
        .subscribe(data => {
          this.access = data.map(e => {
            return {
              id: e.payload.doc.id,
              users: e.payload.doc.data()["users"],
              image: e.payload.doc.data()["image"],
              domicilio: e.payload.doc.data()["domicilio"],
              telefono: e.payload.doc.data()["telefono"]
            };
          });

          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);

    }
  }

  showToast(message: string) {
    this.ToastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(ToastData => ToastData.present());
  }

  //////////////////////////////////////////////toma de mensajes publicos

  getMessages(){
    var messagesRef = firebase.database().ref().child("publicos");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
      //this.scrollToBottom();
    });
  }
 sendMessage(){
    var messagesRef = firebase.database().ref().child("publicos");
    messagesRef.push({mensaje: this.msg, nombre: this.userName});
    this.msg = "";
  }
}









