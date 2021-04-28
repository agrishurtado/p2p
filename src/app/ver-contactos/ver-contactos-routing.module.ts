import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerContactosPage } from './ver-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: VerContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerContactosPageRoutingModule {}
