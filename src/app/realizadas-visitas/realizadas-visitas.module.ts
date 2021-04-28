import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizadasVisitasPageRoutingModule } from './realizadas-visitas-routing.module';

import { RealizadasVisitasPage } from './realizadas-visitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizadasVisitasPageRoutingModule
  ],
  declarations: [RealizadasVisitasPage]
})
export class RealizadasVisitasPageModule {}
