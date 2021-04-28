import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registro } from '../models/registrocondominos.model';
import { AuthService } from '../services/auth.service';
import { VisitaI } from '../models/visita.interface';

@Component({
  selector: 'app-accesos-registrar-visita-dos',
  templateUrl: './accesos-registrar-visita-dos.page.html',
  styleUrls: ['./accesos-registrar-visita-dos.page.scss'],
})
export class AccesosRegistrarVisitaDosPage implements OnInit {
  registro : any;
  id: any;
  visita = {} as VisitaI;
  ids: any;
  public myAngularQRCode: string = null;
  
  constructor(private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private authServ: AuthService) { 
      this.id = this.actRoute.snapshot.paramMap.get("id");
    }

  ngOnInit() {
    this.authServ.getUserAuth().subscribe(users => {
      this.ids = users.uid
    });
    this.getPost(this.id);
  }

  async getPost(id : string){
    
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    this.firestore.doc("visitaproveedoradmin/" + id)
    .valueChanges()
    .subscribe(data => {
        this.visita.nombre = data["nombre"];
     
        this.visita.tipo  = data["tipo"];
          this.visita.fecha = data["fecha"];
          this.visita.tipoFecha = data["tipoFecha"];
          this.visita.domicilio = data["domicilio"];
          this.visita.clave= data["clave"];
          this.visita.who = data["who"];
     
        });
        (await loader).dismiss();
      }

  async updatePost(visita: VisitaI){
    
      let loader = this.loadingCtrl.create({
        message: "Actualizando Datos..."
      });
      (await loader).present();

      try {
        await this.firestore.doc("visitaproveedoradmin/" + this.id).update(visita);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();

      //redirigir a home

      //this.navCtrl.navigateRoot("/ver-contactos-c");
    }
    showToast(message: string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
    }

    createQRCode(){
      this.myAngularQRCode = this.visita.clave;
     // this.textToCode = "";
      console.log(this.myAngularQRCode)
    }

}
