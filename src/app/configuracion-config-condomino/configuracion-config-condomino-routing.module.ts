import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoPage } from './configuracion-config-condomino.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoPageRoutingModule {}
