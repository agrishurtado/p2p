import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestasRevisarEncuestaPage } from './encuestas-revisar-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestasRevisarEncuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestasRevisarEncuestaPageRoutingModule {}
