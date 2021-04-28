import { Component, OnInit } from '@angular/core';
import { VisitaI } from '../models/visita.interface';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-realizadas-visitas',
  templateUrl: './realizadas-visitas.page.html',
  styleUrls: ['./realizadas-visitas.page.scss'],
})
export class RealizadasVisitasPage implements OnInit {

  visitas: VisitaI[];
  constructor(private route: ActivatedRoute,
    private nav: NavController,
    private visitaService:VisitaService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.visitaService.getVisitas().subscribe(res => this.visitas = res);    
  }

  async onRemove(idVisita:string){
    const alert = await this.alertCtrl.create({
        message: 'Ésta acción eliminará la visita, ¿Continuar?',
        buttons: [
          {
              text: 'Si',
              handler: () => {
                this.visitaService.removeVisita(idVisita);
                this.nav.navigateForward('/accesos');
              }
          },            
            {
              text: 'No',
              handler: () => {
            }
          }
        ]
    });
    await alert.present();
  }
}

