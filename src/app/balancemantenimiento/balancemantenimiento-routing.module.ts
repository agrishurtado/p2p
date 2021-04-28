import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalancemantenimientoPage } from './balancemantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: BalancemantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalancemantenimientoPageRoutingModule {}
