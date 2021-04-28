import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesPublicosPageRoutingModule } from './mensajes-publicos-routing.module';

import { MensajesPublicosPage } from './mensajes-publicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesPublicosPageRoutingModule
  ],
  declarations: [MensajesPublicosPage]
})
export class MensajesPublicosPageModule {}
