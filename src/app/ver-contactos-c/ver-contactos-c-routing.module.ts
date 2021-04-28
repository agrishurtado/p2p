import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerContactosCPage } from './ver-contactos-c.page';

const routes: Routes = [
  {
    path: '',
    component: VerContactosCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerContactosCPageRoutingModule {}
