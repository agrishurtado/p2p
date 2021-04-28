import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceporautorizareditarareasPageRoutingModule } from './balanceporautorizareditarareas-routing.module';

import { BalanceporautorizareditarareasPage } from './balanceporautorizareditarareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceporautorizareditarareasPageRoutingModule
  ],
  declarations: [BalanceporautorizareditarareasPage]
})
export class BalanceporautorizareditarareasPageModule {}
