import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosRedactarPage } from './comunicados-redactar.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosRedactarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosRedactarPageRoutingModule {}
