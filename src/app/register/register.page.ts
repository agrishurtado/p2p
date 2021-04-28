import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // public email: string;
  // public password: string;
  // public users: string;

 // user = {} as User;
  constructor( 
              //  private afAuth: AuthService,
              //  private router: Router
               
            ) { }

  ngOnInit() { }

  // onSubmitRegistro(){
  //   this.afAuth.register(this.email, this.password, this.users).then( auth => {
  //     this.router.navigate(['login/'])
  //   }).catch(err => console.log(err))
  // }


}