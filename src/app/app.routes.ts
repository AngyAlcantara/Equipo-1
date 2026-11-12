import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'mis-direcciones',
    loadComponent: () =>
      import('./mis-direcciones/mis-direcciones.page')
        .then((m) => m.MisDireccionesPage),
  },
  {
    path: 'agregar-direccion',
    loadComponent: () =>
      import('./agregar-direccion/agregar-direccion.page')
        .then((m) => m.AgregarDireccionPage),
  },
  {
    path: 'solicitar-pipa',
    loadComponent: () =>
      import('./solicitar-pipa/solicitar-pipa.page')
        .then((m) => m.SolicitarPipaPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];