import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditproverPageRoutingModule } from './editprover-routing.module';

import { EditproverPage } from './editprover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditproverPageRoutingModule
  ],
  declarations: [EditproverPage]
})
export class EditproverPageModule {}
