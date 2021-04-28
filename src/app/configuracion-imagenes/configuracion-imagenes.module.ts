import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionImagenesPageRoutingModule } from './configuracion-imagenes-routing.module';

import { ConfiguracionImagenesPage } from './configuracion-imagenes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionImagenesPageRoutingModule
  ],
  declarations: [ConfiguracionImagenesPage]
})
export class ConfiguracionImagenesPageModule {}
