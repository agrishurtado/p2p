import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosRedactarPageRoutingModule } from './comunicados-redactar-routing.module';

import { ComunicadosRedactarPage } from './comunicados-redactar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosRedactarPageRoutingModule
  ],
  declarations: [ComunicadosRedactarPage]
})
export class ComunicadosRedactarPageModule {}
