import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesosRegistrarVisitaDosPageRoutingModule } from './accesos-registrar-visita-dos-routing.module';

import { AccesosRegistrarVisitaDosPage } from './accesos-registrar-visita-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesosRegistrarVisitaDosPageRoutingModule
  ],
  declarations: [AccesosRegistrarVisitaDosPage]
})
export class AccesosRegistrarVisitaDosPageModule {}
