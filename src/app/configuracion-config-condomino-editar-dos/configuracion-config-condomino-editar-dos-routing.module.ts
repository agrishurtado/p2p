import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoEditarDosPage } from './configuracion-config-condomino-editar-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoEditarDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoEditarDosPageRoutingModule {}
