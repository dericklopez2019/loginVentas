import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'lista-ventas',
    loadChildren: () => import('./pages/lista-ventas/lista-ventas.module').then( m => m.ListaVentasPageModule)
  },
  {
    path: 'crear-ventas',
    loadChildren: () => import('./pages/crear-ventas/crear-ventas.module').then( m => m.CrearVentasPageModule)
  },
  {
    path: 'editar-venta',
    loadChildren: () => import('./pages/editar-venta/editar-venta.module').then( m => m.EditarVentaPageModule)
  },
  {
    path: 'editar-ventas',
    loadChildren: () => import('./pages/editar-ventas/editar-ventas.module').then( m => m.EditarVentasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
