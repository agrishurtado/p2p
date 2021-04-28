import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesPoliciacosPage } from './mensajes-policiacos.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesPoliciacosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPoliciacosPageRoutingModule {}
