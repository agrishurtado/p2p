import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesSiniestrosPage } from './mensajes-siniestros.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesSiniestrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesSiniestrosPageRoutingModule {}
