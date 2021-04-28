import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Encuestas } from '../models/encuestas.model';

@Component({
  selector: 'app-encuestas-revisar-encuesta',
  templateUrl: './encuestas-revisar-encuesta.page.html',
  styleUrls: ['./encuestas-revisar-encuesta.page.scss'],
})
export class EncuestasRevisarEncuestaPage implements OnInit {
  porsentaje = 0.05;
  post = {} as Encuestas;
  id: any;
  constructor(private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController

  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }



  cambioRango(event) {
    console.log(event);
    this.porsentaje = event.detail.value / 100;
  }





  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    this.firestore.doc("preguntas/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.pregunta = data["pregunta"];
        this.post.titulo = data["titulo"];
        this.post.respuesta = data["respuesta"];
        this.post.respuestab = data["respuestab"];
        this.post.respuestac = data["respuestac"];
      });
    (await loader).dismiss();
  }






}
