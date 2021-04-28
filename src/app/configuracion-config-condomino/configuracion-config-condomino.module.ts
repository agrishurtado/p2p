import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoPageRoutingModule } from './configuracion-config-condomino-routing.module';

import { ConfiguracionConfigCondominoPage } from './configuracion-config-condomino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoPage]
})
export class ConfiguracionConfigCondominoPageModule {}
