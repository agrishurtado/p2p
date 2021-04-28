import { Component, OnInit } from '@angular/core';
import {Balance} from '../models/balance.model';
import {Reservar} from '../models/reservar.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Autorizadoz } from '../models/pagosautorizadoz.model';


@Component({
  selector: 'app-balanceareascomunes',
  templateUrl: './balanceareascomunes.page.html',
  styleUrls: ['./balanceareascomunes.page.scss'],
})
export class BalanceareascomunesPage implements OnInit {
   registro2: any;
    registro :  any;
    post = {} as Balance;
    fecha: Date= new Date();
    id: any;
    post2 = {} as Autorizadoz ;
    
    constructor(private toastCtrl: ToastController,
      private loadingCtrl: LoadingController,
      private navCtrl: NavController,
      private authService: AuthService,
      private firestore: AngularFirestore
      ) { }
  ngOnInit(): void {
    this.getPostv();
    this.getPostr();
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
  
val (post){
  this.createpagosautorizados(post);
  this.crearbalanceareas(post);
}
      async crearbalanceareas(post: Balance){
        // console.log(typeof this.post.fecha);
        console.log(typeof this.post.nombre);
        // console.log(typeof this.post.concepto);
        // console.log(typeof this.post.importe);

        if(this.formValidationBanco()){
          let loader = this.loadingCtrl.create({
            message: "Registrando Cuenta..."
          });
          (await loader).present();
    
          try {
            this.post.status="Autorizados";
            await this.firestore.collection("pagoareascomunesadmin").add(post);
          } catch (e) {
            this.showToast(e);
          }
          //cerrar loading
          (await loader).dismiss();
            
          //redirigir a home
    
          // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");
          this.navCtrl.navigateRoot("/balance");

    
       }
      }
      async getPostv(){
  
        let loader = await this.loadingCtrl.create({
          message: "Espera un momento... "
        });
      
        loader.present();
        try {
          this.firestore
          
    // ya no esta la tabla usuariocondomino de donde sacamos los domicilios por eso los tomo 
    // de esta otra condomino 
    .collection ("condomino")
          .snapshotChanges ()
          .subscribe (data => {
            this.registro = data.map(e => {
            return {
              id: e.payload.doc.id,        
              domicilio: e.payload.doc.data()["domicilio"],
             
      
             
      
            };
          });
          
          loader.dismiss();
          });
         } catch (e) {
          this.showToast(e);
      
        }
        // this.navCtrl.navigateForward('/balance');

      }

      async createpagosautorizados(post: Autorizadoz) {
       
          let loader = this.loadingCtrl.create({
            message: "Autorizando..."
          });
          (await loader).present();
          try {
            console.log(this.post);      
           post.usuario="admin";
            await this.firestore.collection(this.post.status).add(post);
          } catch (e) {
            this.showToast(e);
          }
          //cerrar loading
          (await loader).dismiss();
    
        
      }
  
      formValidationBanco(){
        if(!this.post.importe){
          this.showToast("Porfavor Ingresa importe solo numeros");
          return false;
        }  
        if(!this.post.fecha){
          this.showToast("Porfavor Ingresa mes");
          return false;
        }  
      
           return true;
         }

         async getPostr(){
  
          let loader = await this.loadingCtrl.create({
            message: "Espera un momento... "
          });
        
          loader.present();
          try {
            this.firestore
            .collection ("reservables")
            .snapshotChanges ()
            .subscribe (data => {
              this.registro2 = data.map(e => {
              return {
                id: e.payload.doc.id,        
                nombre: e.payload.doc.data()["nombre"],
                horariodias: e.payload.doc.data()["horariodias"],
                costo: e.payload.doc.data()["costo"]
              };
            });
            
            loader.dismiss();
            });
           } catch (e) {
            this.showToast(e);
        
          }
        }
  
         showToast(message: string){
          this.toastCtrl.create({
            message: message,
            duration: 3000
          })
          .then(toastData => toastData.present());
        
      }
    
  }
  