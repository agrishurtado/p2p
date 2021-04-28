import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEliminarPage } from './configuracion-config-condomino-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEliminarPageRoutingModule {}
