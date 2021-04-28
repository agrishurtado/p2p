import { Component, OnInit } from '@angular/core';
import { Encuestas } from '../models/encuestas.model';
import { ToastController, LoadingController, NavController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntase',
  templateUrl: './preguntase.page.html',
  styleUrls: ['./preguntase.page.scss'],
})
export class PreguntasePage implements OnInit {

  post = {} as Encuestas;
  constructor(private toastCtrl: ToastController,
              private alert: AlertController,
              private router: Router,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private firestore: AngularFirestore
    ) { }

  ngOnInit() {}

  async showOptions() {
    const alert = await this.alert.create({
      header: 'Atención!!',
      message: 'Estas a punto de terminar tu encuesta.',
      buttons: [{
        text: 'Guardar y Terminar',
        handler: () => {
          if(this.formValidation()){
          this.createPost(this.post);
          this.router.navigate(['encuestastitulos/'])
        }
        }
    },            
      {
        text: 'Editar'
    }]
    });

    await alert.present();
  }

  async createPost(post: Encuestas){

    
    if(this.formValidation()){
      let loader = this.loadingCtrl.create({
        message: "posting..."
      });
      (await loader).present();

      try {
        await this.firestore.collection("preguntas").add(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
     
         this.post.titulo = "";                       
         this.post.pregunta = "";                    this.post.pregunta2 = "";     
         this.post.respuesta = "";                   this.post.respuesta2 = "";
         this.post.respuestab = "";                  this.post.respuestab2 = "";  
         this.post.respuestac = "";                  this.post.respuestac2 = "";
                            

         this.post.pregunta3 = "";                   this.post.pregunta4 = ""; 
         this.post.respuesta3 = "";                  this.post.respuesta4 = "";
         this.post.respuestab3 = "";                 this.post.respuestab4 = "";  
         this.post.respuestac3 = "";                 this.post.respuestac4 = "";

         
         this.post.pregunta5 = "";
         this.post.respuesta5 = "";
         this.post.respuestab5 = ""; 
         this.post.respuestac5 = "";


         this.post.mensaje = "";
         this.post.fechainicio = "";
         this.post.fechatermino = "";

    }
  
  }
    formValidation(){
      
      if(!this.post.titulo){
        this.showToast("Ingresa un Título para tu Encuesta");
        return false;
      }
      if(!this.post.pregunta){
        this.showToast("Ingresa una Pregunta");
        return false;
      }
       if(!this.post.respuesta){
         this.showToast("Ingresa almenos una Respuesta ");
         return false;
       }
       if(!this.post.respuestab){
         this.post.respuestab = "N/A";
        
      }
      if(!this.post.respuestac){
         this.post.respuestac = "N/A";
        
      }
      if(!this.post.pregunta2){
         this.post.pregunta2 = "N/A";
        
      }
      if(!this.post.respuesta2){
         this.post.respuesta2 = "N/A";
        
      }
      if(!this.post.respuestab2){
         this.post.respuestab2 = "N/A";
        
      }
      if(!this.post.respuestac2){
         this.post.respuestac2 = "N/A";
        
      }
      if(!this.post.pregunta3){
         this.post.pregunta3 = "N/A";
        
      }
      if(!this.post.respuesta3){
         this.post.respuesta3 = "N/A";
        
      }
      if(!this.post.respuestab3){
         this.post.respuestab3 = "N/A";
        
      }
      if(!this.post.respuestac3){
         this.post.respuestac3 = "N/A";
        
      }
      if(!this.post.pregunta4){
         this.post.pregunta4 = "N/A";
        
      }
      if(!this.post.respuesta4){
         this.post.respuesta4 = "N/A";
        
      }
      if(!this.post.respuestab4){
         this.post.respuestab4 = "N/A";
        
      }
      if(!this.post.respuestac4){
         this.post.respuestac4 = "N/A";
        
      }
      if(!this.post.pregunta5){
         this.post.pregunta5 = "N/A";
        
      }
      if(!this.post.respuesta5){
         this.post.respuesta5 = "N/A";
        
      }
      if(!this.post.respuestab5){
         this.post.respuestab5 = "N/A";
        
      }
      if(!this.post.respuestac5){
         this.post.respuestac5 = "N/A";
        
      }
       return true;
    }
    
    showToast(message: string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
    
  }
}

