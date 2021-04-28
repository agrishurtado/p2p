import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesPoliciacosPageRoutingModule } from './mensajes-policiacos-routing.module';

import { MensajesPoliciacosPage } from './mensajes-policiacos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesPoliciacosPageRoutingModule
  ],
  declarations: [MensajesPoliciacosPage]
})
export class MensajesPoliciacosPageModule {}
