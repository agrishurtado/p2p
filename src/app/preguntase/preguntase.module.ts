import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasePageRoutingModule } from './preguntase-routing.module';

import { PreguntasePage } from './preguntase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasePageRoutingModule
  ],
  declarations: [PreguntasePage]
})
export class PreguntasePageModule {}
