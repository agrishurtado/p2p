import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceporautorizareditarareasPage } from './balanceporautorizareditarareas.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceporautorizareditarareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceporautorizareditarareasPageRoutingModule {}
