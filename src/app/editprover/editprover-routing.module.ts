import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditproverPage } from './editprover.page';

const routes: Routes = [
  {
    path: '',
    component: EditproverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditproverPageRoutingModule {}
