import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesAutorizadasPage } from './reservaciones-autorizadas.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesAutorizadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesAutorizadasPageRoutingModule {}
