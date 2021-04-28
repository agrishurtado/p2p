import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancegastosPageRoutingModule } from './balancegastos-routing.module';

import { BalancegastosPage } from './balancegastos.page';
import {BusquedaModule } from '../busqueda/busqueda.module';

@NgModule({
  imports: [
    BusquedaModule ,
    CommonModule,
    FormsModule,
    IonicModule,
    BalancegastosPageRoutingModule
  ],
  declarations: [BalancegastosPage]
})
export class BalancegastosPageModule {}
