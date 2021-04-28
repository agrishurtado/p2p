import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEliminarTresPageRoutingModule } from './configuracion-config-condomino-eliminar-tres-routing.module';

import { ConfiguracionConfigCondominoEliminarTresPage } from './configuracion-config-condomino-eliminar-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    ConfiguracionConfigCondominoEliminarTresPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEliminarTresPage]
})
export class ConfiguracionConfigCondominoEliminarTresPageModule {}
