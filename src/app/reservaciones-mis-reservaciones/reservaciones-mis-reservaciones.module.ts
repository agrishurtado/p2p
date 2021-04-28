import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesMisReservacionesPageRoutingModule } from './reservaciones-mis-reservaciones-routing.module';

import { ReservacionesMisReservacionesPage } from './reservaciones-mis-reservaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesMisReservacionesPageRoutingModule
  ],
  declarations: [ReservacionesMisReservacionesPage]
})
export class ReservacionesMisReservacionesPageModule {}
