import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposVisitasPageRoutingModule } from './tipos-visitas-routing.module';

import { TiposVisitasPage } from './tipos-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposVisitasPageRoutingModule
  ],
  declarations: [TiposVisitasPage]
})
export class TiposVisitasPageModule {}
