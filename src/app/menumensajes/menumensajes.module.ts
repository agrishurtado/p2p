import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenumensajesPageRoutingModule } from './menumensajes-routing.module';

import { MenumensajesPage } from './menumensajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenumensajesPageRoutingModule
  ],
  declarations: [MenumensajesPage]
})
export class MenumensajesPageModule {}
