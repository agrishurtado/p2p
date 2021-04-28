import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancemantenimientoPageRoutingModule } from './balancemantenimiento-routing.module';

import { BalancemantenimientoPage } from './balancemantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancemantenimientoPageRoutingModule
  ],
  declarations: [BalancemantenimientoPage]
})
export class BalancemantenimientoPageModule {}
