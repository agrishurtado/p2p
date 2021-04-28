import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController, AlertController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Fraccion } from '../models/fracci.model';

let base64data = null;
@Component({
  selector: 'app-configuracion-registro-condomino',
  templateUrl: './configuracion-registro-condomino.page.html',
  styleUrls: ['./configuracion-registro-condomino.page.scss'],
})
export class ConfiguracionRegistroCondominoPage implements OnInit {

  posts = {} as Fraccion;

  // email: string;
  // password: string;
  // domicilio: string;
  // telefono: number;
  // tipo: string;
  public emailV: string;
  public passwordV: string;
  public nombreV: string;
  public telefonoV: string;
  public tipoV: string;


  public email: string;
  public password: string;
  public nombre: string;
  public tipo: string;
  public domicilio: string;
  public nfraccionamiento: string = this.posts.nfraccionamiento;
  public telefono: string;
  public sald: string;
  public accede: string = "false";
  public actdesmsn: string = "false";
  public actdesmark: string = "false";
  public actdesreser: string = "false";
  public actdesbal: string = "false";
  public actdesenc: string = "false";
  public actdescomu: string = "false";
  public actdespay: string = "false";
  public actdesacc: string = "false";
  public actdesos: string = "false";
  public image: string;
  id: any;


  constructor(private toastCtrl: ToastController,
    private alert: AlertController,
    private firestore: AngularFirestore,
    private afAuth: AuthService,
    private loadingCtrl: LoadingController,
    private actRoute: ActivatedRoute

  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.afAuth.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    this.firestore.doc("users/" + id)
      .valueChanges()
      .subscribe(data => {
        this.posts.nfraccionamiento = data["nfraccionamiento"];
      });
    (await loader).dismiss();
  }

  async condoRegis() {
    const alert = await this.alert.create({
      header: 'Registro Exitoso!!',
      message: 'El usuario' + this.nombreV + 'Se ha registrado.',
      buttons: [{
        text: 'Ok',
        handler: () => {

          // this.router.navigate(['directorio/'])

        }
      }]
    });

    await alert.present();
  }

  //caseta

  async showOptions() {
    const alert = await this.alert.create({
      header: 'Registro Exitoso!!!',
      message: 'El usuario se ha registrado satisfactoriamente.',
      buttons: [{
        text: 'Ok',
        handler: () => {

          // this.router.navigate(['directorio/'])

        }
      }]
    });

    await alert.present();
  }

  onSubmitRegistro() {
    this.afAuth.register(this.email,
      this.password,
      this.nombre,
      this.tipo,
      this.domicilio,
      this.nfraccionamiento,
      this.telefono,
      this.sald,
      this.accede,
      this.actdesmsn,
      this.actdesmark,
      this.actdesreser,
      this.actdesbal,
      this.actdesenc,
      this.actdescomu,
      this.actdespay,
      this.actdesacc,
      this.actdesos,
      this.image = base64data == "" || base64data == null ? this.image : base64data,
    ).then(auth => {


      this.email = "";
      this.password = "";
      this.nombre = "";
      this.tipo = "";
      this.domicilio = "";
      this.telefono = "";
      this.sald = "";



      this.condoRegis();
    }).catch(err => alert('Vaya parece que algo salio mal :( ' + err))
  }


  // Caseta


  onSubmitRegistroB() {
    this.afAuth.registerV(this.emailV,
      this.passwordV,
      this.nombreV,
      this.tipoV,
      this.telefonoV).then(auth => {


        this.emailV = "";
        this.passwordV = "";
        this.nombreV = "";
        this.tipoV = "";
        this.telefonoV = "";

        this.showOptions();

      }).catch(err => alert('Vaya parece que algo salio mal :( ' + err))
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
}