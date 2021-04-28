import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionRegistroCondominoPage } from './configuracion-registro-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionRegistroCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionRegistroCondominoPageRoutingModule {}
