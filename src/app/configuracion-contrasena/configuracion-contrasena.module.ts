import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionContrasenaPageRoutingModule } from './configuracion-contrasena-routing.module';

import { ConfiguracionContrasenaPage } from './configuracion-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfiguracionContrasenaPageRoutingModule
  ],
  declarations: [ConfiguracionContrasenaPage]
})
export class ConfiguracionContrasenaPageModule {}
