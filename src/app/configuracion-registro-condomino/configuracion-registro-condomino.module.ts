import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionRegistroCondominoPageRoutingModule } from './configuracion-registro-condomino-routing.module';

import { ConfiguracionRegistroCondominoPage } from './configuracion-registro-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionRegistroCondominoPageRoutingModule
  ],
  declarations: [ConfiguracionRegistroCondominoPage]
})
export class ConfiguracionRegistroCondominoPageModule {}
