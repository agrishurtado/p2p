import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceareascomunesPage } from './balanceareascomunes.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceareascomunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceareascomunesPageRoutingModule {}
