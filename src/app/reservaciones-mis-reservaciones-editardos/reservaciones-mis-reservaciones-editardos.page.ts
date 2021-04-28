import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
import { Reservar } from '../models/reservar.model';


@Component({
  selector: 'app-reservaciones-mis-reservaciones-editardos',
  templateUrl: './reservaciones-mis-reservaciones-editardos.page.html',
  styleUrls: ['./reservaciones-mis-reservaciones-editardos.page.scss'],
})
export class ReservacionesMisReservacionesEditardosPage  {
  registro:any;
  areas: any;
  registro2:any;
  post = {} as Reservar;
  fecha: Date= new Date();
  refComunicados: any;
  refComunicados2: any;
  fechaparse: any;
id:any;

 
  

  constructor(private loadingCtrl: LoadingController,
    private actRoute: ActivatedRoute,
    public nav: NavController,
              private firestore: AngularFirestore,
              private ToastCtrl: ToastController) { 
                this.id = this.actRoute.snapshot.paramMap.get("id");
              }

             

ionViewWillEnter(){
  this.getPostt(this.id);
}
async getPostt(id: string) {
  let loader = this.loadingCtrl.create({
    message: "please wait..."
  });
  (await loader).present();

  this.firestore.doc("reservaciones/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.domicilio = data["domicilio"];
     
      this.post.estatus = data["status"];
      this.post.fecha = data["fecha"];
      this.post.nombre = data["area"];
      this.post.nota = data["nota"];
      
    });
  (await loader).dismiss();
}



async createPost(post: Reservar){
  // if(this.formValidation()){
    console.log(post);
  let loader = this.loadingCtrl.create({
  message: "Registrando Cuenta..."
  });
  (await loader).present();
  
  try {
  await this.firestore.doc("reservaciones/" + this.id).update(post);
  } catch (e) {
  this.showToast(e);
  }
  //cerrar loading
  (await loader).dismiss();
  
  //redirigir a home
  
  this.nav.navigateRoot("/reservaciones-mis-reservaciones");
  
  
  }
  // }






 
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}
}
