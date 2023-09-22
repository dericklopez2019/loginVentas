import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearVentasPageRoutingModule } from './crear-ventas-routing.module';

import { CrearVentasPage } from './crear-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearVentasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearVentasPage]
})
export class CrearVentasPageModule {}
