import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEditarDosPageRoutingModule } from './configuracion-config-condomino-editar-dos-routing.module';

import { ConfiguracionConfigCondominoEditarDosPage } from './configuracion-config-condomino-editar-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoEditarDosPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEditarDosPage]
})
export class ConfiguracionConfigCondominoEditarDosPageModule {}
