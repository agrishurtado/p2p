import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposVisitasPage } from './tipos-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: TiposVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposVisitasPageRoutingModule {}
