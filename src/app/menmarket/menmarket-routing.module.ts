import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenmarketPage } from './menmarket.page';

const routes: Routes = [
  {
    path: '',
    component: MenmarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenmarketPageRoutingModule {}
