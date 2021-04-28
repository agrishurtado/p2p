import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmesadPageRoutingModule } from './editmesad-routing.module';

import { EditmesadPage } from './editmesad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmesadPageRoutingModule
  ],
  declarations: [EditmesadPage]
})
export class EditmesadPageModule {}
