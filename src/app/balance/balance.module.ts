import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancePageRoutingModule } from './balance-routing.module';

import { BalancePage } from './balance.page';
import { FiltrobalancePipe} from '../pipesbalance/filtrobalance.pipe';
import { PipesbalanceModule } from '../pipesbalance/pipesbalance.module';

@NgModule({
  imports: [
    CommonModule,
    PipesbalanceModule,
    FormsModule,
    IonicModule,
    BalancePageRoutingModule
  ],
  declarations: [BalancePage]
})
export class BalancePageModule {}
