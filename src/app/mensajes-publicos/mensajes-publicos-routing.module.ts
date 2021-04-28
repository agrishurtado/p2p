import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesPublicosPage } from './mensajes-publicos.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesPublicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPublicosPageRoutingModule {}
