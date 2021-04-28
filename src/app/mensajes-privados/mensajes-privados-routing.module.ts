import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesPrivadosPage } from './mensajes-privados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesPrivadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPrivadosPageRoutingModule {}
