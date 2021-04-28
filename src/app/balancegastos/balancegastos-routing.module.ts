import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancegastosPage } from './balancegastos.page';

const routes: Routes = [
  {
    path: '',
    component: BalancegastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancegastosPageRoutingModule {}
