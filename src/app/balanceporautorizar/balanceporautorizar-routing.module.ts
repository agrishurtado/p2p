import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceporautorizarPage } from './balanceporautorizar.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceporautorizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceporautorizarPageRoutingModule {}
