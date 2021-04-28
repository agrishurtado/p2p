import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionesMisReservacionesEditarPageRoutingModule } from './reservaciones-mis-reservaciones-editar-routing.module';

import { ReservacionesMisReservacionesEditarPage } from './reservaciones-mis-reservaciones-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservacionesMisReservacionesEditarPageRoutingModule
  ],
  declarations: [ReservacionesMisReservacionesEditarPage]
})
export class ReservacionesMisReservacionesEditarPageModule {}
