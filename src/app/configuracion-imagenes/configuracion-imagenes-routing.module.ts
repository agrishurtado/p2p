import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionImagenesPage } from './configuracion-imagenes.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionImagenesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionImagenesPageRoutingModule {}
