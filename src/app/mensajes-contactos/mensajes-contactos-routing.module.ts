import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesContactosPage } from './mensajes-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesContactosPageRoutingModule {}
