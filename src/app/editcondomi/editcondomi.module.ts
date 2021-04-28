import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcondomiPageRoutingModule } from './editcondomi-routing.module';

import { EditcondomiPage } from './editcondomi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcondomiPageRoutingModule
  ],
  declarations: [EditcondomiPage]
})
export class EditcondomiPageModule {}
