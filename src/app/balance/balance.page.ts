import { Component, OnInit } from '@angular/core';
import { Balance } from '../models/balance.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {



  
  i: any;
fecha: Date= new Date();
balance :  any; 
balance2:any
post = {} as Balance;
id: any;
resultado : 0;
balances: any;
totalm: any;
totalareaf: any;
total2: any;
total3: any;
mantenimiento: any;
areas: any;
ingresos: any;
gasto: any;
cuentas: any;
saldo: any;
gastos: any;
estado: any;
estadocuenta:any;
salmes: any;
madre: any;
textobuscar = "";
  reservar: any;
  refpagos4: any;
  totalMantenimineto: any;


constructor(private toastCtrl: ToastController,
            private loadingCtrl: LoadingController,
            private navCtrl: NavController,
            private authService: AuthService,
            private firestore: AngularFirestore
            ) {
              this.balance = [];
              
             }
ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
    this.id = user.uid
  }); 

}
// buscardireccion( event){
//   const texto = event.target.value;
//   this.textobuscar = texto;
//   console.log(this.reservar);
// }
ionViewWillEnter(){
  this.getPosta();
  this.getPost();
  this.getPostM();
  this.getPostcuent();
  this.getPostestadocuenta(); 
  this.getPostManteniminetocondominos(); 
}

// registros de pagos de mantenimineto condominos
async getPostManteniminetocondominos(){  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {   
    this.refpagos4 = this.firestore.collection("pagoss", ref => ref.where('status','==', 'Autorizados').where('concepto','==', 'Mantenimiento'))
    this.refpagos4    
    .snapshotChanges ()
    .subscribe (data => {
      this.balance2 = data.map(e => {
      return {
        id: e.payload.doc.id,      
        costo: + e.payload.doc.data()["importe"],      
      };
    });
     console.log(this.balance2);     
    let totalMantenimineto = 0; 
    this.balance2.forEach(function (element){
      totalMantenimineto += element.costo;
    })    
      this.ingresos += totalMantenimineto;
      this.totalm += totalMantenimineto;
    console.log(totalMantenimineto + "esto es el total de mante de condominos");
  //  console.log(this.balance.fecha + "aaaaa");   
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}
// registro de pagos de areas comunes de condominos*****
async getPost(){  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {   
    this.refpagos4 = this.firestore.collection("pagoss", ref => ref.where('status','==', 'Autorizados').where('concepto','==', 'Área Común'))
    this.refpagos4
    
    .snapshotChanges ()
    .subscribe (data => {
      this.balance = data.map(e => {
      return {
        id: e.payload.doc.id,      
        costo: + e.payload.doc.data()["importe"],      
      };
    });
     console.log(this.balance);     
    let total = 0; 
    this.balance.forEach(function (element){
      total += element.costo;
      console.log(element.costo +"eso fue todo ");
    })    
      this.total2 = total + this.totalareaf ;
    console.log(this.total2);
  //  console.log(this.balance.fecha + "aaaaa");   
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}
// registros de pagos de mantenimineto de admin
async getPostM(){  
  // console.log(resultado);
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {
    this.firestore
    .collection ("pagoMantenimiento")
    .snapshotChanges ()
    .subscribe (data => {
      this.mantenimiento = data.map(e => {
      return {
        id: e.payload.doc.id,      
        costo: + e.payload.doc.data()["importe"],        
      };
    });
    let total12 = 0;
    this.mantenimiento.forEach(function (element){
      total12 += element.costo;
    })    
     

    
 this.totalm = total12;
   
    
    this.ingresos = total12 +  this.total2 ;  
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}
// registro de pagos de areas comunes en admin
async getPosta(){  
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {
    this.firestore
    .collection ("pagoareascomunesadmin")
    .snapshotChanges ()
    .subscribe (data => {
      this.areas = data.map(e => {
      return {
        id: e.payload.doc.id,      
        costo: + e.payload.doc.data()["importe"],        
      };
    });
    let totalarea = 0;
    this.areas.forEach(function (element){
      totalarea += element.costo;     
    })    
    console.log(totalarea +"perrisimo");
    this.totalareaf = totalarea;
   
    console.log(this.totalareaf +"perrisimo2");
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}



















// registros de los gastos adquiridos desde administrador
async getPostcuent(){  
  // console.log(resultado);
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("gastos")
    .snapshotChanges ()
    .subscribe (data => {
      this.cuentas = data.map(e => {
      return {
        id: e.payload.doc.id,      
        concepto: e.payload.doc.data()["concepto"],
        fecha: e.payload.doc.data()["fecha"],
        nombre: e.payload.doc.data()["nombre"],
        importe: + e.payload.doc.data()["importe"],
        
        
      };
    });
    console.log( this.cuentas);
    let totalcuent = 0;
    this.cuentas.forEach(function (element){
      console.log(typeof element.importe);
      totalcuent += element.importe;
    })
    this.gastos = totalcuent;
    
 
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}
// registros de banco para traer el saldo de la cuenta inicial registrado por admin en configuracion  |
async getPostestadocuenta(){  
  // console.log(resultado);
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("banco")
    .snapshotChanges ()
    .subscribe (data => {
      this.saldo = data.map(e => {
      return {
        id: e.payload.doc.id,      
        saldocuenta: + e.payload.doc.data()["saldocuenta"],
        
        
      };
    });
    console.log( this.saldo);
    let totalcuent = 0;
    this.saldo.forEach(function (element){
      console.log(typeof element.saldocuenta);
      totalcuent = element.saldocuenta;
    })
    this.estado = totalcuent;
    this.estadocuenta = this.estado - this.gastos;
    console.log(this.estado);
    console.log(this.estadocuenta);
    // this.salmes= this.ingresos - this.gastos;
    
    this.salmes= this.ingresos - this.gastos;
    console.log(this.salmes);
    this.madre= (this.estado +this.ingresos)-this.gastos;
    
    console.log(this.madre);


    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}
// metodo para registrar en tabla de condominos donde estan areas y mantenimineto pagos 
// async createPostBalance(post: Balance){
//   if(this.formValidationBalance()){
//     let loader = this.loadingCtrl.create({
//       message: "Registrando Cuenta..."
//     });
//     (await loader).present();

//     try {
// await this.firestore.collection("pago").add(post);
//     } catch (e) {
//       this.showToast(e);
//     }
//     //cerrar loading
//     (await loader).dismiss();
      
//     //redirigir a home

//     // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");


//   }
// }
// validaciones 
formValidationBalance(){
//  if(!this.post.fecha){
//    this.showToast("Porfavor Ingresa fecha");
//    return false;
//  }      
//  if(!this.post.mantenimientopagos){
//    this.showToast("Porfavor Ingresa mantenimiento Mes");
//    return false;
//  }
//  if(!this.post.areascomunespgos){
//    this.showToast("Porfavor Ingresa areas comunes pagos");
//   return false;
// }
// if(!this.post.fechagastos){
//  this.showToast("Porfavor Ingresa la fecha gastos");
//  return false;
// }
// if(!this.post.rubro){
//   this.showToast("Porfavor Ingresa  rubro");
//   return false;
//  }
//  if(!this.post.concepto){
//   this.showToast("Porfavor Ingresa  conceptos");
//   return false;
//  }
//  if(!this.post.monto){
//   this.showToast("Porfavor Ingresa monto");
//   return false;
//  }
//  if(!this.post.saldomes){
//   this.showToast("Porfavor Ingresa  saldo mes");
//   return false;
//  }
//  if(!this.post.saldocuento){
//   this.showToast("Porfavor Ingresa  saldo cuenta");
  //return false;
 //}
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



