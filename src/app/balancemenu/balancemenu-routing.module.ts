import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancemenuPage } from './balancemenu.page';

const routes: Routes = [
  {
    path: '',
    component: BalancemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancemenuPageRoutingModule {}
