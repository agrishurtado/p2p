import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-configuracion-config-condomino-eliminar-tres',
  templateUrl: './configuracion-config-condomino-eliminar-tres.page.html',
  styleUrls: ['./configuracion-config-condomino-eliminar-tres.page.scss'],
})
export class ConfiguracionConfigCondominoEliminarTresPage {


  constructor(private messaging: MessagingService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) 
      {
      this.listenForMessages();
     }
     
     ionViewDidEnter(){
      this.requestPersmission();
    }

    //metodo para la captura de mensajes con notificacion
     listenForMessages(){
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
     requestPersmission(){
       this.messaging.requestPersmission().subscribe(
         async token => {
           const toast = await this.toastCtrl.create({
             message: 'Got your token',
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


    async deleteToken(){
      this.messaging.deleteToken();
      const toast = await this.toastCtrl.create({
        message: 'Token remuved',
        duration: 2000
      });
      toast.present();
     }

 
}
 