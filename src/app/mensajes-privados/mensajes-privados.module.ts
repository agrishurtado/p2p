import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesPrivadosPageRoutingModule } from './mensajes-privados-routing.module';

import { MensajesPrivadosPage } from './mensajes-privados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesPrivadosPageRoutingModule
  ],
  declarations: [MensajesPrivadosPage]
})
export class MensajesPrivadosPageModule {}
