import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionContrasenaPage } from './configuracion-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionContrasenaPageRoutingModule {}
