import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenmarketPageRoutingModule } from './menmarket-routing.module';

import { MenmarketPage } from './menmarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenmarketPageRoutingModule
  ],
  declarations: [MenmarketPage]
})
export class MenmarketPageModule {}
