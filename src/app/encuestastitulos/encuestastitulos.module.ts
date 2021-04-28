import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestastitulosPageRoutingModule } from './encuestastitulos-routing.module';

import { EncuestastitulosPage } from './encuestastitulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestastitulosPageRoutingModule
  ],
  declarations: [EncuestastitulosPage]
})
export class EncuestastitulosPageModule {}
