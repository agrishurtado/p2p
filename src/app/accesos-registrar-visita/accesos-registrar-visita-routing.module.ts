import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesosRegistrarVisitaPage } from './accesos-registrar-visita.page';

const routes: Routes = [
  {
    path: '',
    component: AccesosRegistrarVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesosRegistrarVisitaPageRoutingModule {}
