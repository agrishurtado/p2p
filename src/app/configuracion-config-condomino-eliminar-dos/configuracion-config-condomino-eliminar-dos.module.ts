import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEliminarDosPageRoutingModule } from './configuracion-config-condomino-eliminar-dos-routing.module';

import { ConfiguracionConfigCondominoEliminarDosPage } from './configuracion-config-condomino-eliminar-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoEliminarDosPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEliminarDosPage]
})
export class ConfiguracionConfigCondominoEliminarDosPageModule {}
