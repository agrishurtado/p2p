import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cuentas } from '../models/numac.model';

@Component({
  selector: 'app-configuracion-config-condomino-editar-dos',
  templateUrl: './configuracion-config-condomino-editar-dos.page.html',
  styleUrls: ['./configuracion-config-condomino-editar-dos.page.scss'],
})
export class ConfiguracionConfigCondominoEditarDosPage implements OnInit {

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
  
      this.firestore.doc("conceptos/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.luz = data["luz"];
        this.post.mantenimiento = data["mantenimiento"];
        this.post.seguridad = data["seguridad"];
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
          await this.firestore.doc("conceptos/" + this.id).update(post);
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
      if(!this.post.luz){
        this.showToast("Enter luz");
        return false;
      }    
      if(!this.post.mantenimiento){
        this.showToast("Enter mantenimiento");
        return false;
      }
      if(!this.post.seguridad){
        this.showToast("Enter seguridad");
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
  
