import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerContactosCPageRoutingModule } from './ver-contactos-c-routing.module';

import { VerContactosCPage } from './ver-contactos-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerContactosCPageRoutingModule
  ],
  declarations: [VerContactosCPage]
})
export class VerContactosCPageModule {}
