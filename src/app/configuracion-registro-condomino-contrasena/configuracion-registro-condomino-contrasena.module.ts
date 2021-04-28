import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionRegistroCondominoContrasenaPageRoutingModule } from './configuracion-registro-condomino-contrasena-routing.module';

import { ConfiguracionRegistroCondominoContrasenaPage } from './configuracion-registro-condomino-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionRegistroCondominoContrasenaPageRoutingModule
  ],
  declarations: [ConfiguracionRegistroCondominoContrasenaPage]
})
export class ConfiguracionRegistroCondominoContrasenaPageModule {}
