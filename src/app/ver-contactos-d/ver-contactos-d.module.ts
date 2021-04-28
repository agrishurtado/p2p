import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerContactosDPageRoutingModule } from './ver-contactos-d-routing.module';

import { VerContactosDPage } from './ver-contactos-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerContactosDPageRoutingModule
  ],
  declarations: [VerContactosDPage]
})
export class VerContactosDPageModule {}
