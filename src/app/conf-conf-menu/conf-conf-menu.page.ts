import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-conf-conf-menu',
  templateUrl: './conf-conf-menu.page.html',
  styleUrls: ['./conf-conf-menu.page.scss'],
})
export class ConfConfMenuPage implements OnInit {
id: any;
  constructor(private alert: AlertController, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(user => {
      this.id = user.uid
    });
    
  }
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Aviso!!',
      subHeader: 'Solo puedes hacer un registro de los siguientes apartados:',
      message: 'Datos de cuenta, Concepto de pago, Cuota. Si ya realizaste uno de alguno de estos campos oprime "Editar", de lo contrario oprime "Registrar Nuevo".',
      buttons: [{
        text: 'Editar',
        handler: () => {
          this.router.navigate(['configuracion-config-condomino-eliminar/'])
        }
    }]
    });

    await alert.present();
  }

}
