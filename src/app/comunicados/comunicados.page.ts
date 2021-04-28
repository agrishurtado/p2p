import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
// import { Autorizadoz} from '../models/pagosautorizadoz.model';
import { ComunicadoI } from '../models/comunicados.interface';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

var base64data = null;
 @Component({
    selector: 'app-comunicados',
    templateUrl: './comunicados.page.html',
    styleUrls: ['./comunicados.page.scss'],
  })
  export class ComunicadosPage implements OnInit {
  logo: any;
  id: any;
  registro : any;
  refComunicados: any;
  constructor(private authService: AuthService,
                private sanitizer: DomSanitizer,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private ToastCtrl: ToastController) {
                 
                 }
 ngOnInit() {
    this.getPost();
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }
  ionViewWillEnter() {
    this.getPost();
  }
  async getPost(){
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });
  
    loader.present();
    try {
     this.refComunicados = this.firestore.collection('comunicados', ref => ref.orderBy('fechaHora', 'desc'))
     
     this.refComunicados
      // .ref.orderBy('fechaHora', 'desc').
      .snapshotChanges ()
      .subscribe (data => {
        this.registro = data.map(e => {
        return {
          
          id: e.payload.doc.id,
          titulo: e.payload.doc.data()["titulo"],
          fechaHora: e.payload.doc.data()["fechaHora"],
          Mensaje: e.payload.doc.data()["Mensaje"],
          image: e.payload.doc.data()["image"]
          
        

  
        };
        
      });
       
       
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
  
    await this.firestore.doc("comunicados/" + id).delete();
    (await loader).dismiss();
}
 

}














































// import { Component, OnInit } from '@angular/core';
// import { ComunicadoI }from '../models/comunicados.interface';
// import { ComunicadosService } from '../services/comunicados.service';
// import { ActivatedRoute } from '@angular/router';
// import { NavController, LoadingController, AlertController } from '@ionic/angular';
// import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
// import {enableProdMode} from '@angular/core';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-comunicados',
//   templateUrl: './comunicados.page.html',
//   styleUrls: ['./comunicados.page.scss'],
// })
// export class ComunicadosPage implements OnInit {
//   comunicados: ComunicadoI[];
//   id: any;
//   constructor(private comunicadoService:ComunicadosService,
//     private route: ActivatedRoute,
//     private nav: NavController,
//     private authService: AuthService,
//     private sanitizer: DomSanitizer,
//     private alertCtrl: AlertController) { }

//   ngOnInit() {
//     this.authService.getUserAuth().subscribe(user => {
//       this.id = user.uid
//     });
    
//     this.comunicadoService.getComunicados().subscribe(res => this.comunicados = res);    
//   }

//   async onRemove(idComunicado:string){
//     const alert = await this.alertCtrl.create({
//         message: 'Ésta acción eliminará el comunicado, ¿Continuar?',
//         buttons: [
//           {
//               text: 'Si',
//               handler: () => {
//                 this.comunicadoService.removeComunicado(idComunicado);
//                 this.nav.navigateForward('/comunicados');
//               }
//           },            
//             {
//               text: 'No',
//               handler: () => {
//             }
//           } 
//         ]
//     });
//     await alert.present();
//   }
//   getImgContent(imgFile:string): SafeUrl {
//     enableProdMode();
//     return this.sanitizer.bypassSecurityTrustUrl(imgFile);
//   }
// } 