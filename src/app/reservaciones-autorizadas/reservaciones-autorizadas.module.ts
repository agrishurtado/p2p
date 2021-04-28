import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesAutorizadasPageRoutingModule } from './reservaciones-autorizadas-routing.module';

import { ReservacionesAutorizadasPage } from './reservaciones-autorizadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesAutorizadasPageRoutingModule
  ],
  declarations: [ReservacionesAutorizadasPage]
})
export class ReservacionesAutorizadasPageModule {}
