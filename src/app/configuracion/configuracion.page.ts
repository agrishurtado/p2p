import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
id: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
  }

}
