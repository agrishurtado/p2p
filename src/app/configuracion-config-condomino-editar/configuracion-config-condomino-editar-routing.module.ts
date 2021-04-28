import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEditarPage } from './configuracion-config-condomino-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEditarPageRoutingModule {}
