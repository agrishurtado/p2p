import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Acces } from '../models/registro-accesos.model';
import { AuthService } from '../services/auth.service';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  post = {} as Acces;
id: any;

  constructor(private messaging: MessagingService,
              private actRoute: ActivatedRoute,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private firestore: AngularFirestore,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
             this.id = this.actRoute.snapshot.paramMap.get("id");
              this.listenForMessages();
  }

  ngOnInit() {
    this.getPostById(this.id);
    }

  ionViewDidEnter() {
    this.requestPersmission();
  }

  Onlogout() {
    this.authService.logout();
  }

  //metodo para la captura de mensajes con notificacion
  listenForMessages() {
    this.messaging.getMessages().subscribe(async (msg: any) => {

      console.log('NEW MESSAGE: ', msg);

      const alert = await this.alertCtrl.create({
        header: msg.notification.title,
        subHeader: msg.notification.body,
        message: msg.data.info,
        buttons: ['OK'],
      });

      await alert.present();
    })
  }
  //metodo para solicitar el permiso del usuario para recibir notificaciones
  requestPersmission() {
    this.messaging.requestPersmission().subscribe(
      async token => {
        const toast = await this.toastCtrl.create({
          message: 'Bienvenido(a)',
          duration: 2000


        });
        toast.present();
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: err,
          buttons: ['OK'],
        });
        await alert.present();
      }
    )
  }


  async deleteToken() {
    this.messaging.deleteToken();
    const toast = await this.toastCtrl.create({
      message: 'Token remuved',
      duration: 2000
    });
    toast.present();
  }

  async getPostById(id: string){
    let loader = this.loadingCtrl.create({
      message: "Espera un momento...."
    });

    (await loader ) .present();
    this.firestore.doc("users/" +id) 
    .valueChanges ()
    .subscribe (data => {
      this.post.tipo = data["tipo"],
      this.post.actdes = data["actdes"],
      this.post.users = data["users"]
      
      
      
    });

    (await loader) .dismiss();

  }



}
