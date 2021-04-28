import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcondomiPage } from './editcondomi.page';

const routes: Routes = [
  {
    path: '',
    component: EditcondomiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcondomiPageRoutingModule {}
