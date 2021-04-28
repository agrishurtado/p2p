import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerContactosPageRoutingModule } from './ver-contactos-routing.module';

import { VerContactosPage } from './ver-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerContactosPageRoutingModule
  ],
  declarations: [VerContactosPage]
})
export class VerContactosPageModule {}
