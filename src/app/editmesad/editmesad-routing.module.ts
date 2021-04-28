import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmesadPage } from './editmesad.page';

const routes: Routes = [
  {
    path: '',
    component: EditmesadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmesadPageRoutingModule {}
