import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerContactosDPage } from './ver-contactos-d.page';

const routes: Routes = [
  {
    path: '',
    component: VerContactosDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerContactosDPageRoutingModule {}
