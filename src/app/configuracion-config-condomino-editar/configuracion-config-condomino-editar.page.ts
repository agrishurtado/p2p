import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cuentas } from '../models/numac.model';

@Component({
  selector: 'app-configuracion-config-condomino-editar',
  templateUrl: './configuracion-config-condomino-editar.page.html',
  styleUrls: ['./configuracion-config-condomino-editar.page.scss'],
})
export class ConfiguracionConfigCondominoEditarPage implements OnInit {

  post = {} as Cuentas;
  id: any;
  
    constructor(private actRoute: ActivatedRoute,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private toastCtrl: ToastController,
                private navCtrl: NavController
  
              ) {
      this.id = this.actRoute.snapshot.paramMap.get("id");
     }
  
    ngOnInit() {
     this.getPostById(this.id);
    }
  
    async getPostById(id: string){
      let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();
  
      this.firestore.doc("banco/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.banco = data["banco"];
        this.post.cuenta = data["cuenta"];
        this.post.clave = data["clave"];
        this.post.tarjeta = data["tarjeta"];      
      });
      (await loader).dismiss();
    }
  
    async updatePost(post: Cuentas){
      if(this.formValidation()){
        let loader = this.loadingCtrl.create({
          message: "please wait..."
        });
        (await loader).present();
  
        try {
          await this.firestore.doc("banco/" + this.id).update(post);
        } catch (e) {
          this.showToast(e);
        }
        //cerrar loading
        (await loader).dismiss();
  
        //redirigir a home
  
        this.navCtrl.navigateRoot("/configuracion-config-condomino-eliminar");
      }
    }
  
    formValidation(){
      if(!this.post.banco){
        this.showToast("Enter banco");
        return false;
      }    
      if(!this.post.cuenta){
        this.showToast("Enter cuenta");
        return false;
      }
      if(!this.post.clave){
        this.showToast("Enter clave");
        return false;
      }
      if(!this.post.tarjeta){
        this.showToast("Enter trjeta");
        return false;
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
  
