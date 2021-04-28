import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionConfigCondominoDosPage } from './configuracion-config-condomino-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionConfigCondominoDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionConfigCondominoDosPageRoutingModule {}
