import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestasRevisarEncuestaPageRoutingModule } from './encuestas-revisar-encuesta-routing.module';

import { EncuestasRevisarEncuestaPage } from './encuestas-revisar-encuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestasRevisarEncuestaPageRoutingModule
  ],
  declarations: [EncuestasRevisarEncuestaPage]
})
export class EncuestasRevisarEncuestaPageModule {}
