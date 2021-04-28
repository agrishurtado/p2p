import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesMisReservacionesEditardosPageRoutingModule } from './reservaciones-mis-reservaciones-editardos-routing.module';

import { ReservacionesMisReservacionesEditardosPage } from './reservaciones-mis-reservaciones-editardos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesMisReservacionesEditardosPageRoutingModule
  ],
  declarations: [ReservacionesMisReservacionesEditardosPage]
})
export class ReservacionesMisReservacionesEditardosPageModule {}
