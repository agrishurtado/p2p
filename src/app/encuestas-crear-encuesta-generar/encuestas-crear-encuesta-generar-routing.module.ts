import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncuestasCrearEncuestaGenerarPage } from './encuestas-crear-encuesta-generar.page';

const routes: Routes = [
  {
    path: '',
    component: EncuestasCrearEncuestaGenerarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncuestasCrearEncuestaGenerarPageRoutingModule {}
