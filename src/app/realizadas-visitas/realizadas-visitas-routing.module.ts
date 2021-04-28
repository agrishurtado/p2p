import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizadasVisitasPage } from './realizadas-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: RealizadasVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizadasVisitasPageRoutingModule {}
