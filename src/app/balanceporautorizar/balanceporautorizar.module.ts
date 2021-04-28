import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceporautorizarPageRoutingModule } from './balanceporautorizar-routing.module';

import { BalanceporautorizarPage } from './balanceporautorizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceporautorizarPageRoutingModule
  ],
  declarations: [BalanceporautorizarPage]
})
export class BalanceporautorizarPageModule {}
