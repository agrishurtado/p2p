import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancesubtitulosPageRoutingModule } from './balancesubtitulos-routing.module';

import { BalancesubtitulosPage } from './balancesubtitulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancesubtitulosPageRoutingModule
  ],
  declarations: [BalancesubtitulosPage]
})
export class BalancesubtitulosPageModule {}
