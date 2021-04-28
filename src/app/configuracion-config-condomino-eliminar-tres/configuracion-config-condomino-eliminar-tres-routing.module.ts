import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEliminarTresPage } from './configuracion-config-condomino-eliminar-tres.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEliminarTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEliminarTresPageRoutingModule {}
