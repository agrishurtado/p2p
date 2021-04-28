import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Gasto } from '../models//balancegastos.model';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';

var base64data = null;
const {Camera} = Plugins;
@Component({
  selector: 'app-balancegastos',
  templateUrl: './balancegastos.page.html',
  styleUrls: ['./balancegastos.page.scss'],
})
export class BalancegastosPage implements OnInit {
  textobuscar = "";
  gastos: any;
  registro :  any;
  post = {} as Gasto;
  fecha: Date= new Date();
  id: any;
  cuentas: any;
  logo: any;
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private sanitizer: DomSanitizer,
    private navCtrl: NavController,
    private authService: AuthService,
    private firestore: AngularFirestore
    ) { }
ngOnInit(): void {
  this.getPostcuent();
  this.authService.getUserAuth().subscribe(user => {
    this.id = user.uid
  });  
}
buscardireccion( event){
  const texto = event.target.value;
  this.textobuscar = texto;
  console.log(this.textobuscar);
  console.log(this.gastos);
}
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
    
    
 
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}

    async creategatos(post: Gasto){
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
          this.post.imagen = base64data == "" || base64data == null ? this.post.imagen : base64data;
          await this.firestore.collection("gastos").add(post);
        } catch (e) {
          this.showToast(e);
        }
        //cerrar loading
        (await loader).dismiss();
        // this.nav.navigateForward('/balance');

        //redirigir a home
  
        this.navCtrl.navigateRoot("/balance");
  
  
      }
    }

    formValidationBanco(){
      if(!this.post.importe){
        this.showToast("Porfavor Ingresa importe solo numeros");
        return false;
      }  
      if(!this.post.fecha){
        this.showToast("Porfavor Ingresa fecha");
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
    
  loadImageFromDevice() {
    const images: CameraOptions = {
      quality: 50,
      resultType: CameraResultType.Base64,
      allowEditing: true
    }
    Camera.getPhoto(images).then(imgdata => {
      base64data = 'data:image/jpeg;base64,' + imgdata.base64String;
    });
 }
  
  getImgContent(imgFile: string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  
}