import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cuentas } from '../models/numac.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-configuracion-config-condomino-editar-tres',
  templateUrl: './configuracion-config-condomino-editar-tres.page.html',
  styleUrls: ['./configuracion-config-condomino-editar-tres.page.scss'],
})
export class ConfiguracionConfigCondominoEditarTresPage implements OnInit {

  post = {} as Cuentas;
  id: any;
  
    constructor(private actRoute: ActivatedRoute,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private toastCtrl: ToastController,
                private navCtrl: NavController,
                private afAuth: AuthService
  
              ) {
      this.id = this.actRoute.snapshot.paramMap.get("id");
     }
  
    ngOnInit() {
     this.getPostById(this.id);
     this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    }
  
    async getPostById(id: string){
      let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();
  
      this.firestore.doc("cuotas/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.diapago = data["diapago"];
        this.post.luz = data["luz"];
        this.post.mantenimiento = data["mantenimiento"];
        this.post.seguridad = data["seguridad"];
        this.post.pagotardio = data["pagotardio"];
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
          await this.firestore.doc("cuotas/" + this.id).update(post);
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
