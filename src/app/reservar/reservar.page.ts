import { Component, OnInit } from '@angular/core';
import {Reservar} from '../models/reservar.model';


import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  textobuscar = "";
  reservar: any;
  registro :  any;
  areas: any;
  areas2: any;
  array: any;
  fechas: any;
    post = {} as Reservar;
    
    fecha: Date= new Date();
    todo: any;

   id: any;
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private authService: AuthService
    ) {
     
     
      this.fechas = [];
      this.array = [];
     }


    
    

ngOnInit() {
  this.authService.getUserAuth().subscribe(user => {
    this.id = user.uid;
   });
   this.getPostdomicilio();
  this.getPostv();
  this.getPost();

 
} 
buscardireccion( event){
  const texto = event.target.value;
  this.textobuscar = texto;
  console.log(this.reservar);
}


async createPost(post: Reservar){
if(this.formValidation()){
let loader = this.loadingCtrl.create({
message: "Registrando Cuenta..."
});
(await loader).present();

try {
await this.firestore.collection("reservar").add(post);
} catch (e) {
this.showToast(e);
}
//cerrar loading
(await loader).dismiss();

//redirigir a home

this.navCtrl.navigateRoot("/reservar");


}
}


formValidation(){
  console.log(this.areas2);
  if(!this.post.fecha){
    this.showToast("Porfavor Ingresa fecha");
    return false;
    }      
    if(!this.post.nombre){
    this.showToast("Porfavor Ingresa nombre");
    return false;
    }
    if(!this.post.estatus){
    this.showToast("Porfavor Ingresa  estatus");
    return false;
    }
    if(!this.post.domicilio){
      this.showToast("Porfavor Ingresa  Domicilio");
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

// ionViewWillEnter(){
//   this.getPost()
//   ;
// }
// ionViewWillEnter1(){
//   this.getPostv();
// }

async getPostv(){
  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("reservables")
    .snapshotChanges ()
    .subscribe (data => {
      this.registro = data.map(e => {
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

ionViewWillEnter(){
  this.getPostdomicilio();
}


async getPost(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("reservar")
    .snapshotChanges ()
    .subscribe (data => {
      this.areas = data.map(e => {
      return {
        id: e.payload.doc.id,
        nombre: e.payload.doc.data()["nombre"],
        fecha: e.payload.doc.data()["fecha"],
        estatus: e.payload.doc.data()["estatus"],
        domicilio: e.payload.doc.data()["domicilio"],

      };
      
    }); 
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
 
  }
}

async getPostdomicilio(){
  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

// async deletePost(id: string) {
//   //loading
//   let loader = this.loadingCtrl.create({
//     message: "deleting...."
//   }); 
//   (await loader).present();

//   await this.firestore.doc("condomino/" + id).delete();

//   (await loader).dismiss();
// }

  loader.present();
  try {
    this.firestore

    // ya no esta la tabla usuariocondomino de donde sacamos los domicilios por eso los tomo 
    // de esta otra condomino 
    .collection ("condomino")
    .snapshotChanges ()
    .subscribe (data => {
      this.todo = data.map(e => {
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
}

}