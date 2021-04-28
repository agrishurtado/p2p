import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { Autorizadoz} from '../models/pagosautorizadoz.model';
import { ModalController, IonSlides } from '@ionic/angular';
import { ImgModalPage } from '../img-modal/img-modal.page';

var base64data = null;
@Component({
  selector: 'app-balanceporautorizar',
  templateUrl: './balanceporautorizar.page.html',
  styleUrls: ['./balanceporautorizar.page.scss'],
})
export class BalanceporautorizarPage implements OnInit {
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };
  falta:'Por Autorizar';
  hecho:'Autorizados';
  logo: any;
  ids: any;
  id: any;
  imagen: any;
  imagen2: any;
  imagen3: any;
  registro : any;
  registro2 : any;
  registro3:any;
  registro4:any;
  refpagos: any;
  refpagos3: any;
  refpagos4: any;
  refpagos2: any;
  refpagos5: any;
  refpagos6: any;
  refpagos7: any;

  constructor(private authService: AuthService,
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private ToastCtrl: ToastController,
                private photoViewer: PhotoViewer,
                private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) { }
 ngOnInit() {
    this.getPost();
    this.getPostareas();
    this.getPostmantenimineto();
    this.getPostareasadmin();
    this.authService.getUserAuth().subscribe(user => {
      this.ids = user.uid
    });
  }
  ionViewWillEnter() {
    this.getPost();
  }
  // registros de mantenimineto de administrador 
  async getPost(){
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });
  
    loader.present();
    try {
      this.refpagos = this.firestore.collection("pagoMantenimiento", ref => ref.where('status','==', 'Por Autorizar'));    
    this.refpagos
    this.refpagos6 = this.firestore.collection("pagoMantenimiento", ref => ref.orderBy('fecha', 'desc'));    
    this.refpagos6
      .snapshotChanges ()
      .subscribe (data => {
        this.registro = data.map(e => {
        return {
          id: e.payload.doc.id,
          domicilio: e.payload.doc.data()["domicilio"],
          concepto: e.payload.doc.data()["concepto"],
          image: e.payload.doc.data()["image"],
          importe: e.payload.doc.data()["importe"],
          fecha: e.payload.doc.data()["fecha"],
          status: e.payload.doc.data()["status"]
       

        };
      });
      this.imagen = this.registro.image;
      loader.dismiss();
      });

     } catch (e) {
      this.showToast(e);  
    }
  }  
  showToast (message:string){
    this.ToastCtrl.create({
      message: message, 
      duration: 3000
    })
    .then( ToastData => ToastData.present());
  }
  loadImageFromDevice(event) {
    const file = event.target.files[0];
    if (file) {
      var FR = new FileReader();
      FR.addEventListener("load", function (e) {
        base64data = e.target.result;
      });
      FR.readAsDataURL(file);
    }
  }  
  getImgContent(imgFile: string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  async deletePost(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();
  
    await this.firestore.doc("pago/" + id).delete();
    (await loader).dismiss();
}
// registros de condominos areas comunes y mantenimineto 
async getPostmantenimineto(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {  
    this.refpagos2 = this.firestore.collection("pagoss", ref => ref.where('status','==', 'Por Autorizar').where('concepto','==', 'Mantenimiento'));
    this.refpagos2
    .snapshotChanges ()
    .subscribe (data => {
      this.registro2 = data.map(e => {
      return {
        id: e.payload.doc.id,
        concepto: e.payload.doc.data()["concepto"],
        image: e.payload.doc.data()["image"],
        importe: e.payload.doc.data()["importe"],
        mes: e.payload.doc.data()["mes"],
        year: e.payload.doc.data()["year"],
        domicilio: e.payload.doc.data()["domicilio"],
        status: e.payload.doc.data()["status"]
      };
    }); 
    this.imagen2 = this.registro.image;
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}
// resgistros de areas comunes de admi
async getPostareasadmin(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {  
    
    this.refpagos3 = this.firestore.collection("pagoareascomunesadmin",ref => ref.where('mes','==','').where('status','==', 'Por Autorizar'))    
    this.refpagos3
    // this.refpagos7 = this.firestore.collection("pagoareascomunesadmin", ref => ref.orderBy('fecha'&& 'status','desc'))
    // this.refpagos7
    .snapshotChanges ()
    .subscribe (data => {
      this.registro3 = data.map(e => {
      return {
        id: e.payload.doc.id,
        domicilio: e.payload.doc.data()["domicilio"],
        concepto: e.payload.doc.data()["concepto"],
        image: e.payload.doc.data()["image"],
        importe: e.payload.doc.data()["importe"],
        fecha: e.payload.doc.data()["fecha"],
        status: e.payload.doc.data()["status"],
        year: e.payload.doc.data()["year"]


      };
    });
    this.imagen3 = this.registro.image;
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}

async openPreview(image){
  const modal = await this.modalController.create({
    component: ImgModalPage,
    cssClass: 'transparent-modal',
    componentProps: {
       image
    }
  });
  modal.present();
}

// registros de condominos areas comunes y mantenimineto 
async getPostareas(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });
  loader.present();
  try {  
    this.refpagos4 = this.firestore.collection("pagoss", ref => ref.where('status','==', 'Por Autorizar').where('concepto','==', 'Área Común'))
    this.refpagos4
    .snapshotChanges ()
    .subscribe (data => {
      this.registro4 = data.map(e => {
      return {
        id: e.payload.doc.id,
        concepto: e.payload.doc.data()["concepto"],
        image: e.payload.doc.data()["image"],
        importe: e.payload.doc.data()["importe"],
        mes: e.payload.doc.data()["mes"],
        year: e.payload.doc.data()["year"],
        domicilio: e.payload.doc.data()["domicilio"],
        status: e.payload.doc.data()["status"]
      };
    }); 
    this.imagen2 = this.registro.image;
    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);
  }
}

}
