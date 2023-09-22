import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarVentasPageRoutingModule } from './editar-ventas-routing.module';

import { EditarVentasPage } from './editar-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarVentasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarVentasPage]
})
export class EditarVentasPageModule {}
