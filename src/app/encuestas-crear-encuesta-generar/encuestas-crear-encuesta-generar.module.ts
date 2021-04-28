import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestasCrearEncuestaGenerarPageRoutingModule } from './encuestas-crear-encuesta-generar-routing.module';

import { EncuestasCrearEncuestaGenerarPage } from './encuestas-crear-encuesta-generar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestasCrearEncuestaGenerarPageRoutingModule
  ],
  declarations: [EncuestasCrearEncuestaGenerarPage]
})
export class EncuestasCrearEncuestaGenerarPageModule {}
