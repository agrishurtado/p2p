import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceporautorizareditarPage } from './balanceporautorizareditar.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceporautorizareditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceporautorizareditarPageRoutingModule {}
