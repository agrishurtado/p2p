import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionConfigCondominoDosPageRoutingModule } from './configuracion-config-condomino-dos-routing.module';

import { ConfiguracionConfigCondominoDosPage } from './configuracion-config-condomino-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionConfigCondominoDosPageRoutingModule
  ],
  declarations: [ConfiguracionConfigCondominoDosPage]
})
export class ConfiguracionConfigCondominoDosPageModule {}
