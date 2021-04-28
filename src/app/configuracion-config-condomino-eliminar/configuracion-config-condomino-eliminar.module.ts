import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEliminarPageRoutingModule } from './configuracion-config-condomino-eliminar-routing.module';

import { ConfiguracionConfigCondominoEliminarPage } from './configuracion-config-condomino-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoEliminarPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEliminarPage]
})
export class ConfiguracionConfigCondominoEliminarPageModule {}
