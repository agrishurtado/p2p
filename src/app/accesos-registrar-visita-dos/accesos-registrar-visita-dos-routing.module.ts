import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesosRegistrarVisitaDosPage } from './accesos-registrar-visita-dos.page';

const routes: Routes = [
  {
    path: '',
    component: AccesosRegistrarVisitaDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesosRegistrarVisitaDosPageRoutingModule {}
