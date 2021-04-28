import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesMisReservacionesEditarPage } from './reservaciones-mis-reservaciones-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesMisReservacionesEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesMisReservacionesEditarPageRoutingModule {}
