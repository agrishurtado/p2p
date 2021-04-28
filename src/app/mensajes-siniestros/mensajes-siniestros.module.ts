import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesSiniestrosPageRoutingModule } from './mensajes-siniestros-routing.module';

import { MensajesSiniestrosPage } from './mensajes-siniestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesSiniestrosPageRoutingModule
  ],
  declarations: [MensajesSiniestrosPage]
})
export class MensajesSiniestrosPageModule {}
