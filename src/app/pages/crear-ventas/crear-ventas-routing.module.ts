import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearVentasPage } from './crear-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: CrearVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearVentasPageRoutingModule {}
