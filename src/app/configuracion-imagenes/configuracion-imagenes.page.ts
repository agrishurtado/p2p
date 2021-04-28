import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Logotipo } from '../models/logo.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AuthService } from '../services/auth.service';

var base64data = null;

@Component({
  selector: 'app-configuracion-imagenes',
  templateUrl: './configuracion-imagenes.page.html',
  styleUrls: ['./configuracion-imagenes.page.scss'],
})
export class ConfiguracionImagenesPage implements OnInit {

  post = {} as Logotipo;

  logo: any;
  id: any;

  constructor(private toastCtrl: ToastController,
    private sanitizer: DomSanitizer,
    private loadingCtrl: LoadingController,
    private authSer: AuthService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.authSer.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }


  ionViewWillEnter() {
    this.getPosts();
  }
  async createPost(post: Logotipo) {
    let loader = this.loadingCtrl.create({
      message: "Registrando Pago..."
    });
    (await loader).present();

    try {
      this.post.image = base64data == "" || base64data == null ? this.post.image : base64data;
      await this.firestore.collection("logo").add(post);
    } catch (e) {
      this.showToast(e);
    }
    //cerrar loading
    (await loader).dismiss();
  }



  async getPosts() {
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();

    try {
      this.firestore
        .collection("logo")
        .snapshotChanges()
        .subscribe(data => {
          this.logo = data.map(e => {
            return {
              id: e.payload.doc.id,
              image: e.payload.doc.data()["image"]

            };
          });
          // desaparece loader
          loader.dismiss();
        });

    } catch (e) {
      this.showToast(e);
    }
  }
  //-----------borrar

  async deletePost(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();

    await this.firestore.doc("logo/" + id).delete();

    (await loader).dismiss();
  }




  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());

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

}
