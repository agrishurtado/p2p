import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceporautorizareditarPageRoutingModule } from './balanceporautorizareditar-routing.module';

import { BalanceporautorizareditarPage } from './balanceporautorizareditar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceporautorizareditarPageRoutingModule
  ],
  declarations: [BalanceporautorizareditarPage]
})
export class BalanceporautorizareditarPageModule {}
