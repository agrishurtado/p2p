import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarPageRoutingModule } from './reservar-routing.module';

import { ReservarPage } from './reservar.page';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarPageRoutingModule
  ],
  declarations: [ReservarPage]
})
export class ReservarPageModule {}
