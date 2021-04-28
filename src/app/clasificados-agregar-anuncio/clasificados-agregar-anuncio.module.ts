import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasificadosAgregarAnuncioPageRoutingModule } from './clasificados-agregar-anuncio-routing.module';

import { ClasificadosAgregarAnuncioPage } from './clasificados-agregar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasificadosAgregarAnuncioPageRoutingModule
  ],
  declarations: [ClasificadosAgregarAnuncioPage]
})
export class ClasificadosAgregarAnuncioPageModule {}
