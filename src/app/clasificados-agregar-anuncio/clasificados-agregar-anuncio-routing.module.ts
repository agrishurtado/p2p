import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasificadosAgregarAnuncioPage } from './clasificados-agregar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: ClasificadosAgregarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasificadosAgregarAnuncioPageRoutingModule {}
