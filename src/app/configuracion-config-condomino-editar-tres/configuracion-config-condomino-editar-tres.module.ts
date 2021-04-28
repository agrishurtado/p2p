import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEditarTresPageRoutingModule } from './configuracion-config-condomino-editar-tres-routing.module';

import { ConfiguracionConfigCondominoEditarTresPage } from './configuracion-config-condomino-editar-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoEditarTresPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEditarTresPage]
})
export class ConfiguracionConfigCondominoEditarTresPageModule {}
