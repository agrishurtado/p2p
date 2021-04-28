import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceporautorizareditarmanteniminetoPageRoutingModule } from './balanceporautorizareditarmantenimineto-routing.module';

import { BalanceporautorizareditarmanteniminetoPage } from './balanceporautorizareditarmantenimineto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceporautorizareditarmanteniminetoPageRoutingModule
  ],
  declarations: [BalanceporautorizareditarmanteniminetoPage]
})
export class BalanceporautorizareditarmanteniminetoPageModule {}
