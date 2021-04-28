import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
import { Reservar } from '../models/reservar.model';


@Component({
  selector: 'app-reservaciones-mis-reservaciones-editar',
  templateUrl: './reservaciones-mis-reservaciones-editar.page.html',
  styleUrls: ['./reservaciones-mis-reservaciones-editar.page.scss'],
})
export class ReservacionesMisReservacionesEditarPage  {
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

  this.firestore.doc("reservar/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.domicilio = data["domicilio"];
     
      this.post.estatus = data["estatus"];
      this.post.fecha = data["fecha"];
      this.post.nombre = data["nombre"];
      this.post.nota = data["nota"];
      
    });
  (await loader).dismiss();
}

// obtencion de los registros hechos por admin 
async getPost(){
  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  
  loader.present();
  try {
    this.refComunicados2 = this.firestore.collection("reservar", ref => ref.orderBy('fecha', 'desc'))
    this.refComunicados2

    .snapshotChanges ()
    .subscribe (data => {      
      this.registro = data.map(e => {        
      return {
        id: e.payload.doc.id,       
        estatus: e.payload.doc.data()["estatus"],
        nombre: e.payload.doc.data()["nombre"],
        fecha: e.payload.doc.data()["fecha"],
        domicilio: e.payload.doc.data()["domicilio"],         
      }      
    }); 
    
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}



async createPost(post: Reservar){
  // if(this.formValidation()){
    console.log(post);
  let loader = this.loadingCtrl.create({
  message: "Registrando Cuenta..."
  });
  (await loader).present();
  
  try {
  await this.firestore.doc("reservar/" + this.id).update(post);
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
