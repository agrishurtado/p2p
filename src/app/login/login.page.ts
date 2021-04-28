
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;

  constructor(private authService: AuthService, 
              private afAuth: AngularFireAuth,
              public router: Router){

  }
ngOnInit() { }

  onSubmit(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['ingreso/']);
    }).catch(err => alert('Los datos nos son Correctos :( o el usuario no existe'))
  }

  async  resetPassword(email:string ): Promise <void> {
    try {
      return (await this.afAuth.sendPasswordResetEmail(email));
       
    } catch (error) {
      console.log(error)
    } 
     }
  
   }

 

//   user = {} as User;
//   constructor( private toastCtrl: ToastController, 
//                private loadingCtrl: LoadingController,
//                private afAuth: AngularFireAuth,
//                private navCtrl: NavController) { }

//   ngOnInit() {}

//   async login(user: User) {
//     if(this.formValidation()) {
//       //mostrar carga de espera
//       let loader = this.loadingCtrl.create({
//         message: "please wait..."
//       });
//       (await loader).present();

//       try {
//         await this.afAuth
//           .signInWithEmailAndPassword(user.email, user.password)
//           .then(data => {
//           console.log("correos",data);
//           //redirigir a home 
//           this.navCtrl.navigateRoot("home");
//         });
//       }catch(e){
//         this.showToast(e);
//       }
//       //borrar carga de espera(loader)
//       (await loader).dismiss();
//     }
//   }

//   formValidation(){
//     if(!this.user.email){
//       this.showToast("Enter email");
//       return false;
//     }
  
//     if(!this.user.password){
//       this.showToast("Enter password");
//       return false;
//     }
//     return true;
//   }
  
//   showToast(message: string){
//     this.toastCtrl.create({
//       message: message,
//       duration: 3000
//     })
//     .then(toastData => toastData.present());
//   }


  
