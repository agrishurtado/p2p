import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Encuestas } from '../models/encuestas.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.page.html',
  styleUrls: ['./answers.page.scss'],
})
export class AnswersPage implements OnInit {

  porsentaje = 0.05;
  post = {} as Encuestas;
  id: any;
  title: any;
  posts: any;
  mat: any;
  ids: any;

  mol: any;    molB: any;   molC: any;    molD: any;   molE: any;
  molF: any;   molG: any;   molH: any;    molI: any;   molJ: any;
  molK: any;   molL: any;   molM: any;    molN: any;   molO: any;


  estado: any;      resD: any;        resG: any;        resJ: any;
  allA: any;        allD: any;        allG: any;        allJ: any;            
  resB: any;        resE: any;        resH: any;        resK: any;          
  allB: any;        allE: any;        allH: any;        allK: any;          
  resC: any;        resF: any;        resI: any;        resL: any;          
  allC: any;        allF: any;        allI: any;        allL: any;           

    
  resM: any;                 
  allM: any;                 
  resN: any;                  
  allN: any;                  
  resO: any;                  
  allO: any; 
  
  
  

  constructor(private toastCtrl: ToastController,
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private firestore: AngularFirestore
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.title = this.actRoute.snapshot.paramMap.get("titulo");
  }

  ngOnInit() {
    this.getPostById(this.id);
    this.authService.getUserAuth().subscribe(user => {
      this.ids = user.uid
    });
  }

  ionViewWillEnter() {
    this.getPosts();
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
        this.post.pregunta2 = data["pregunta2"];
        this.post.pregunta3 = data["pregunta3"];
        this.post.pregunta4 = data["pregunta4"];
        this.post.pregunta5 = data["pregunta5"];
        this.post.titulo = data["titulo"];
        this.post.respuesta  = data["respuesta"];
        this.post.respuestab = data["respuestab"];
        this.post.respuestac = data["respuestac"];

        this.post.respuesta2  = data["respuesta2"];
        this.post.respuestab2 = data["respuestab2"];
        this.post.respuestac2 = data["respuestac2"];

        this.post.respuesta3  = data["respuesta3"];
        this.post.respuestab3 = data["respuestab3"];
        this.post.respuestac3 = data["respuestac3"];

        this.post.respuesta4  = data["respuesta4"];
        this.post.respuestab4 = data["respuestab4"];
        this.post.respuestac4 = data["respuestac4"];

        this.post.respuesta5 = data["respuesta5"];
        this.post.respuestab5 = data["respuestab5"];
        this.post.respuestac5 = data["respuestac5"];
      });
    (await loader).dismiss();
  }

  //------
  async getPosts() {
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();

    try {
      this.firestore
        .collection(this.title)
        .snapshotChanges()
        .subscribe(data => {
          this.mat = data.map(e => {
            return {
              id: e.payload.doc.id,
              respuestaA: e.payload.doc.data()["respuestaA"],
              resB: e.payload.doc.data()["resB"],
              resC: e.payload.doc.data()["resC"],

              resD: e.payload.doc.data()["resD"],
              resE: e.payload.doc.data()["resE"],
              resF: e.payload.doc.data()["resF"],

              resG: e.payload.doc.data()["resG"],
              resH: e.payload.doc.data()["resH"],
              resI: e.payload.doc.data()["resI"],

              resJ: e.payload.doc.data()["resJ"],
              resK: e.payload.doc.data()["resK"],
              resL: e.payload.doc.data()["resL"],

              resM: e.payload.doc.data()["resM"],
              resN: e.payload.doc.data()["resN"],
              resO: e.payload.doc.data()["resO"]
            };
          });
          //operacion---
          console.log(this.posts);
          //barra A
          let totalcuent = 0;
          //total A
          let allAnswer = 0;

           //total b
          let allAnswerB = 0;
          //barra B
          let res = 0;

           //total C
          let allAnswerC = 0;
          //barra C
          let reC = 0;

          //total D
          let allAnswerD = 0;
          //barra D
          let reD = 0;

          //total E
          let allAnswerE = 0;
          //barra E
          let reE = 0;

          //total F
          let allAnswerF = 0;
          //barra F
          let reF = 0;

          //total G
          let allAnswerG = 0;
          //barra G
          let reG = 0;

          //total H
          let allAnswerH = 0;
          //barra H
          let reH = 0;

          //total I
          let allAnswerI = 0;
          //barra I
          let reI = 0;

          //total J
          let allAnswerJ = 0;
          //barra J
          let reJ = 0;

          //total K
          let allAnswerK = 0;
          //barra K
          let reK = 0;

          //total L
          let allAnswerL = 0;
          //barra L
          let reL = 0;

          //total M
          let allAnswerM = 0;
          //barra M
          let reM = 0;

          //total N
          let allAnswerN = 0;
          //barra N
          let reN = 0;

          //total O
          let allAnswerO = 0;
          //barra O
          let reO = 0;
          
          this.mat.forEach(function (element) {
            console.log('haber1: ', typeof element.resC);
            //barra A
            totalcuent += element.respuestaA + element.resB + element.resC ;
            //total A
            allAnswer += element.respuestaA;
            
            //barra B
            res += element.resB + element.respuestaA + element.resC;
            //total b
            allAnswerB += element.resB;

            //barra C
            reC += element.resC + element.resB + element.respuestaA;
            //total C
            allAnswerC += element.resC;
            // ///////////////////////////////////////////////////////////////////////////////

            //barra D
            reD += element.resD + element.resE + element.resF;
            //total D
            allAnswerD += element.resD;;

            //barra E
            reE += element.resE +  element.resD + element.resF;
            //total E
            allAnswerE += element.resE;

            //barra F
            reF += element.resF + element.resE +  element.resD;
            //total F
            allAnswerF += element.resF;
            // ///////////////////////////////////////////////////////////////////////////////

            //barra G
            reG += element.resG + element.resH + element.resI;
            //total G
            allAnswerG += element.resG;

            //barra H
            reH += element.resH + element.resG + element.resI;
            //total H
            allAnswerH += element.resH;

            //barra I
            reI += element.resI + element.resH + element.resG;
            //total I
            allAnswerI += element.resI;
            // ///////////////////////////////////////////////////////////////////////////////

            //barra J
            reJ += element.resJ + element.resK + element.resL;
            //total J
            allAnswerJ += element.resJ;
            
            //barra K
            reK += element.resK + element.resJ + element.resL;
            //total K
            allAnswerK += element.resK;

            //barra L
            reL += element.resL + element.resJ + element.resK;
            //total L
            allAnswerL += element.resL;
            // ///////////////////////////////////////////////////////////////////////////////

            //barra M
            reM += element.resM + element.resN + element.resO;
            //total M
            allAnswerM += element.resM;

            //barra N
            reN += element.resN + element.resM + element.resO;
            //total N
            allAnswerN += element.resN;

            //barra O
            reO += element.resO + element.resN + element.resM;
            //total O
            allAnswerO += element.resO;

          })
          //barra A
          this.estado = totalcuent ;
          //total A
          this.allA = allAnswer;
          //BARRA POR RESTUESTA A
          this.mol = this.allA/this.estado;
          console.log('lolo: ', this.mol);

          //barra B
          this.resB = res;
          //total B
          this.allB = allAnswerB;

          //BARRA POR RESTUESTA B
          this.molB = this.allB/this.resB;
          console.log('loloB: ', this.molB);

          //barra C
          this.resC = reC;
          //total C
          this.allC = allAnswerC;

          //BARRA POR RESTUESTA C
          this.molC = this.allC/this.resC;
          console.log('loloC: ', this.molC);

          //barra D
          this.resD = reD;
          //total D
          this.allD = allAnswerD;

          //BARRA POR RESTUESTA D
          this.molD = this.allD/this.resD;
          console.log('loloD: ', this.molD);

          //barra E
          this.resE = reE;
          //total E
          this.allE = allAnswerE;

          //BARRA POR RESTUESTA E
          this.molE = this.allE/this.resE;
          console.log('loloE: ', this.molE);

          //barra F
          this.resF = reF;
          //total F
          this.allF = allAnswerF;

          //BARRA POR RESTUESTA F
          this.molF = this.allF/this.resF;
          console.log('loloF: ', this.molF);

          //barra G
          this.resG = reG;
          //total G
          this.allG = allAnswerG;

          //BARRA POR RESTUESTA G
          this.molG = this.allG/this.resG;
          console.log('loloG: ', this.molG);

          //barra H
          this.resH = reH;
          //total H
          this.allH = allAnswerH;

          //BARRA POR RESTUESTA H
          this.molH = this.allH/this.resH;
          console.log('loloH: ', this.molH);

          //barra I
          this.resI =  reI;
          //total I
          this.allI = allAnswerI;

          //BARRA POR RESTUESTA I
          this.molI = this.allI/this.resI;
          console.log('loloI: ', this.molI);

          //barra J
          this.resJ =  reJ;
          //total J
          this.allJ = allAnswerJ;

          //BARRA POR RESTUESTA J
          this.molJ = this.allJ/this.resJ;
          console.log('loloJ: ', this.molJ);

          //barra K
          this.resK = reK;
          //total K
          this.allK = allAnswerK;

          //BARRA POR RESTUESTA K
          this.molK = this.allK/this.resK;
          console.log('loloK: ', this.molK);

          //barra L
          this.resL = reL;
          //total L
          this.allL = allAnswerL;

          //BARRA POR RESTUESTA L
          this.molL = this.allL/this.resL;
          console.log('loloL: ', this.molL);

          //barra M
          this.resM =  reM;
          //total M
          this.allM = allAnswerM;

          //BARRA POR RESTUESTA M
          this.molM = this.allM/this.resM;
          console.log('loloM: ', this.molM);

          //barra N
          this.resN = reN;
          //total N
          this.allN = allAnswerN;

          //BARRA POR RESTUESTA N
          this.molN = this.allN/this.resN;
          console.log('loloN: ', this.molN);

          //barra O
          this.resO = reO;
          //total O
          this.allO = allAnswerO;

          //BARRA POR RESTUESTA O
          this.molO = this.allO/this.resO;
          console.log('loloO: ', this.molO);


          console.log('haber: ', this.estado);
          loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  //-----------loading

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());
  }

}