import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarVentasPage } from './editar-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarVentasPageRoutingModule {}
