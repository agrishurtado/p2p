import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoTresPageRoutingModule } from './configuracion-config-condomino-tres-routing.module';

import { ConfiguracionConfigCondominoTresPage } from './configuracion-config-condomino-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoTresPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoTresPage]
})
export class ConfiguracionConfigCondominoTresPageModule {}
