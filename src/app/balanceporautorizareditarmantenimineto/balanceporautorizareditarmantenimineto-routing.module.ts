import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceporautorizareditarmanteniminetoPage } from './balanceporautorizareditarmantenimineto.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceporautorizareditarmanteniminetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceporautorizareditarmanteniminetoPageRoutingModule {}
