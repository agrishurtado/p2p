import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesContactosPageRoutingModule } from './mensajes-contactos-routing.module';

import { MensajesContactosPage } from './mensajes-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesContactosPageRoutingModule
  ],
  declarations: [MensajesContactosPage]
})
export class MensajesContactosPageModule {}
