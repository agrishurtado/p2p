import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenumensajesPage } from './menumensajes.page';

const routes: Routes = [
  {
    path: '',
    component: MenumensajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenumensajesPageRoutingModule {}
