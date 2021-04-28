import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfConfMenuPage } from './conf-conf-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ConfConfMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfConfMenuPageRoutingModule {}
