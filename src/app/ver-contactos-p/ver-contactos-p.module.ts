import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerContactosPPageRoutingModule } from './ver-contactos-p-routing.module';

import { VerContactosPPage } from './ver-contactos-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerContactosPPageRoutingModule
  ],
  declarations: [VerContactosPPage]
})
export class VerContactosPPageModule {}
