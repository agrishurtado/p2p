import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasePage } from './preguntase.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasePageRoutingModule {}
