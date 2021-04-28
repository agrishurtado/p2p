import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEliminarDosPage } from './configuracion-config-condomino-eliminar-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEliminarDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEliminarDosPageRoutingModule {}
