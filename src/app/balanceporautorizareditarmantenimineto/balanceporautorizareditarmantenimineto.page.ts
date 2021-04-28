import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Autorizadoz } from '../models/pagosautorizadoz.model';
import { AuthService } from '../services/auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Plugins , CameraResultType, CameraOptions} from '@capacitor/core';
var base64data = null;
const {Camera} = Plugins;
@Component({
  selector: 'app-balanceporautorizareditarmantenimineto',
  templateUrl: './balanceporautorizareditarmantenimineto.page.html',
  styleUrls: ['./balanceporautorizareditarmantenimineto.page.scss'],
})
export class BalanceporautorizareditarmanteniminetoPage implements OnInit {
  fechaa = new Date().toLocaleDateString();
  post = {} as Autorizadoz;
  id: any;
  ids: any;
   logo: any;
  
  constructor(private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private nav: NavController,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private ToastCtrl: ToastController,
    private authServ: AuthService

  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    this.authServ.getUserAuth().subscribe(users => {
      this.ids = users.uid
    });
    this.getPostById(this.id);
 
  }
  val(post: Autorizadoz, id: string){    
    console.log(this.id);
  
    console.log(this.post.status);
    if(this.post.status==="Rechazados"){
      this.createpagosautorizados(post);
      this.deletePost(this.id);
      this.nav.navigateForward('/balanceporautorizar');
  
    }
    if(this.post.status ==="Autorizados"){
      this.updatePost(post);
      this.createpagosautorizados(post);
  
    }
  }
  async updatePost(post: Autorizadoz){
    if(this.formValidation()){
      let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();
      try {
        this.post.usuario='admin';
        await this.firestore.doc("pagoMantenimiento/" + this.id).update(post);     
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
      //redirigir a home
      // this.navCtrl.navigateRoot("/configuracion-config-condomino-eliminar");
    }
  }

  // registros de mantenimineto de administrador 
  async getPostById(id: string) {
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    this.firestore.doc("pagoMantenimiento/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.concepto = data["concepto"];
        this.post.importe = data["importe"];
        this.post.mes = data["mes"];
        this.post.year = data["year"];
        this.post.image = data["image"];
        this.post.status = data["status"];
        // this.post.icono = data["icono"];
        this.post.fecha = data["fecha"];
      });
    (await loader).dismiss();
  }

// metodo para archivar los  pagos autorizados o rechazados 
  async createpagosautorizados(post: Autorizadoz) {
    if (this.formValidation()) {
      let loader = this.loadingCtrl.create({
        message: "Autorizando..."
      });
      (await loader).present();
      try {
        console.log(this.post);      
       this.post.usuario='admin';
        await this.firestore.collection(this.post.status).add(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
      this.nav.navigateForward('/balanceporautorizar');

    }
  }
  async deletePost(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();

    await this.firestore.doc("pagoMantenimiento/" + id).delete();
    (await loader).dismiss();
  }

// validaciones campos 
  formValidation() {
    if (!this.post.status) {
      this.showToast("Porfavor Ingresa estatus");
      return false;
    }
    if (!this.post.concepto) {
      this.showToast("Porfavor Ingresa concepto");
      return false;
    }
    if (!this.post.importe) {
      this.showToast("Porfavor Ingresa importe solo se aceptan numeros");
      return false;
    }
    if (!this.post.mes) {
      this.showToast("Porfavor Ingresa mes");
      return false;
    }
    if (!this.post.year) {
      this.showToast("Porfavor Ingresa año");
      return false;
    }
    if (!this.post.image) {
      this.showToast("Porfavor Ingresa imagen");
      return false;
    }
    return true;
  }
  showToast(message: string) {
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
      this.post.image  =  base64data == "" || base64data == null ? this.post.image : base64data;
    });
  }

}
