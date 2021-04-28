import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesMisReservacionesPage } from './reservaciones-mis-reservaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesMisReservacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesMisReservacionesPageRoutingModule {}
