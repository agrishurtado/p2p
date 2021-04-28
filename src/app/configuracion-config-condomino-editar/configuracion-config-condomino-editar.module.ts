import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoEditarPageRoutingModule } from './configuracion-config-condomino-editar-routing.module';

import { ConfiguracionConfigCondominoEditarPage } from './configuracion-config-condomino-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoEditarPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoEditarPage]
})
export class ConfiguracionConfigCondominoEditarPageModule {}
