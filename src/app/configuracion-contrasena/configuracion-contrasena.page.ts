import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-configuracion-contrasena',
  templateUrl: './configuracion-contrasena.page.html',
  styleUrls: ['./configuracion-contrasena.page.scss'],
  providers: [LoginPage]
})
export class ConfiguracionContrasenaPage implements OnInit {
  userEmail = new FormControl('');
  id: any;
  public email: string = "";
  constructor(private authSvc: LoginPage, private router: Router, private authSer: AuthService) { }

  ngOnInit() {
    this.authSer.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }

  onSubmit() { }

  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Se ha  "noReply"!');
      this.router.navigate(['/configuracion-contrasena']);
    } catch (error) {
      console.log(error);
    }
  }

}
