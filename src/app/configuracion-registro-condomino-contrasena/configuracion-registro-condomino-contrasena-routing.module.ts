import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionRegistroCondominoContrasenaPage } from './configuracion-registro-condomino-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionRegistroCondominoContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionRegistroCondominoContrasenaPageRoutingModule {}
