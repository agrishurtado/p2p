import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceareascomunesPageRoutingModule } from './balanceareascomunes-routing.module';

import { BalanceareascomunesPage } from './balanceareascomunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceareascomunesPageRoutingModule
  ],
  declarations: [BalanceareascomunesPage]
})
export class BalanceareascomunesPageModule {}
