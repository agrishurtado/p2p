import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registro } from '../models/registrocondominos.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-editprover',
  templateUrl: './editprover.page.html',
  styleUrls: ['./editprover.page.scss'],
})
export class EditproverPage implements OnInit {

  proveedor
   post = {} as Registro;
  id: any;
  ids: any;
  
    constructor(private actRoute: ActivatedRoute,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private afAuth: AuthService,
                private toastCtrl: ToastController,
                private navCtrl: NavController
  
              ) {
      this.ids = this.actRoute.snapshot.paramMap.get("id");
     }
  
    ngOnInit() {
      this.afAuth.getUserAuth().subscribe(user => {
        this.id = user.uid
      });
     this.getPostById(this.ids);
    }
  
    async getPostById(ids: string){
      let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();
  
      this.firestore.doc("proveedor/" + ids)
      .valueChanges()
      .subscribe(data => {
        this.post.nombre = data["nombre"];
        this.post.domicilio = data["domicilio"];       
        this.post.telefono = data["telefono"];
        this.post.actdesmsn = data["actdesmsn"];      
        this.post.actdesmark = data["actdesmark"];      
        this.post.actdesreser = data["actdesreser"];      
      });
      (await loader).dismiss();
    }
  
    async updatePost(post: Registro){
      if(this.formValidation()){
        let loader = this.loadingCtrl.create({
          message: "Actualizando Datos..."
        });
        (await loader).present();
  
        try {
          await this.firestore.doc("proveedor/" + this.id).update(post);
        } catch (e) {
          this.showToast(e);
        }
        //cerrar loading
        (await loader).dismiss();
  
        //redirigir a home
  
        this.navCtrl.navigateRoot("/ver-contactos-p");
      }
    }
  
    formValidation(){
      if(!this.post.nombre){
        this.showToast("Porfavor Ingresa nombre");
        return false;
        }      
        if(!this.post.domicilio){
        this.showToast("Porfavor Ingresa direccion");
        return false;
        }
        if(!this.post.telefono){
        this.showToast("Porfavor Ingresa N° tarjeta");
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
   
