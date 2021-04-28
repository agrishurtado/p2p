import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancemenuPageRoutingModule } from './balancemenu-routing.module';

import { BalancemenuPage } from './balancemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancemenuPageRoutingModule
  ],
  declarations: [BalancemenuPage]
})
export class BalancemenuPageModule {}
