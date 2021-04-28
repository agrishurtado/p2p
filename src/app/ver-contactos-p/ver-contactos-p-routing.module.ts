import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerContactosPPage } from './ver-contactos-p.page';

const routes: Routes = [
  {
    path: '',
    component: VerContactosPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerContactosPPageRoutingModule {}
