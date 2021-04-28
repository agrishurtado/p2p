import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesosRegistrarVisitaPageRoutingModule } from './accesos-registrar-visita-routing.module';

import { AccesosRegistrarVisitaPage } from './accesos-registrar-visita.page';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    AccesosRegistrarVisitaPageRoutingModule
  ],
  declarations: [AccesosRegistrarVisitaPage]
})
export class AccesosRegistrarVisitaPageModule {}
