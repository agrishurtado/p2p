import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfConfMenuPageRoutingModule } from './conf-conf-menu-routing.module';

import { ConfConfMenuPage } from './conf-conf-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfConfMenuPageRoutingModule
  ],
  declarations: [ConfConfMenuPage]
})
export class ConfConfMenuPageModule {}
