import { Component, OnInit } from '@angular/core';
import { ClasificadoI } from '../models/clasificados.interface';
import { ClasificadosService } from '../services/clasificados.service'
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Markete } from '../models/market.model';

@Component({
  selector: 'app-clasificados',
  templateUrl: './clasificados.page.html',
  styleUrls: ['./clasificados.page.scss'],
})
export class ClasificadosPage implements OnInit {
  market: any; 
  clasificadoss: Markete[];

  clasificados: ClasificadoI[];
  ids: any;
  id: any;
  constructor(private nav: NavController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private firestore: AngularFirestore,
              private authService: AuthService,
              private clasificadoService: ClasificadosService,
              private sanitizer: DomSanitizer,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.ids = user.uid
    });

    this.clasificadoService.getClasificados().subscribe(res => this.clasificados = res);    
  }
  async onRemove(id: string){
    const alert = await this.alertCtrl.create({
        message: 'Ésta acción eliminará el clasificado, ¿Continuar?',
        buttons: [
          {
              text: 'Si',
              handler: () => {
                this.onRemuveC(id);
              }
          },            
            {
              text: 'No'
          }
        ]
    });
    await alert.present();
  }

  ionViewWillEnter() {
    // this.clasificadoService.getClasificados().subscribe(res => this.clasificados = res);
    this.getPosts();
  }
  //-----------agregar
  async getPosts() {
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();


    try {
      this.firestore
        .collection("market")
        .snapshotChanges()
        .subscribe(data => {
          this.market = data.map(e => {
            return {
              id: e.payload.doc.id,
              name: e.payload.doc.data()["name"],
              tel: e.payload.doc.data()["tel"],
              price: e.payload.doc.data()["price"],
              feedbak: e.payload.doc.data()["feedbak"],
              image: e.payload.doc.data()["image"]

            };
          });
          loader.dismiss();
        });

    } catch (e) {
      this.showToast(e);
    }
  }

  getImgContent(imgFile:string): SafeUrl {
    enableProdMode();
    return this.sanitizer.bypassSecurityTrustUrl(imgFile);
  }
  async deletePost(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();
  
    await this.firestore.doc("clasificados/" + id).delete();
  
    (await loader).dismiss();
    
  }

  async onRemuveC(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();
  
    await this.firestore.doc("market/" + id).delete();
  
    (await loader).dismiss();
    
  }
  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());
  }
}
