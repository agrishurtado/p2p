import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEditarTresPage } from './configuracion-config-condomino-editar-tres.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEditarTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEditarTresPageRoutingModule {}
