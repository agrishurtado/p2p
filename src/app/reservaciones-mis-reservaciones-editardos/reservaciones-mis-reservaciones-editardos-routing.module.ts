import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesMisReservacionesEditardosPage } from './reservaciones-mis-reservaciones-editardos.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesMisReservacionesEditardosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesMisReservacionesEditardosPageRoutingModule {}
