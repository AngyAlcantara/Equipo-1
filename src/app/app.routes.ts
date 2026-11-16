import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', loadComponent: () => import('./pages/bienvenida/bienvenida.page').then(m => m.BienvenidaPage) },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'registro', loadComponent: () => import('./pages/registro/registro.page').then(m => m.RegistroPage) },
  { path: 'recuperar-password', loadComponent: () => import('./pages/recuperar-password/recuperar-password.page').then(m => m.RecuperarPasswordPage) },
  
  // Pantallas principales (al mismo nivel)
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage) },
  { path: 'mis-pedidos', loadComponent: () => import('./pages/mis-pedidos/mis-pedidos.page').then(m => m.MisPedidosPage) },
  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage) },

  // Flujo de solicitud de pipa y subpáginas
  { path: 'solicitar-cantidad', loadComponent: () => import('./pages/solicitar-cantidad/solicitar-cantidad.page').then(m => m.SolicitarCantidadPage) },
  { path: 'solicitar-direccion', loadComponent: () => import('./pages/solicitar-direccion/solicitar-direccion.page').then(m => m.SolicitarDireccionPage) },
  { path: 'solicitar-fecha', loadComponent: () => import('./pages/solicitar-fecha/solicitar-fecha.page').then(m => m.SolicitarFechaPage) },
  { path: 'resumen-pedido', loadComponent: () => import('./pages/resumen-pedido/resumen-pedido.page').then(m => m.ResumenPedidoPage) },
  { path: 'pedido-confirmado', loadComponent: () => import('./pages/pedido-confirmado/pedido-confirmado.page').then(m => m.PedidoConfirmadoPage) },
  { path: 'detalle-pedido', loadComponent: () => import('./pages/detalle-pedido/detalle-pedido.page').then(m => m.DetallePedidoPage) },
  { path: 'datos-personales', loadComponent: () => import('./pages/datos-personales/datos-personales.page').then(m => m.DatosPersonalesPage) },
  { path: 'mis-direcciones', loadComponent: () => import('./pages/mis-direcciones/mis-direcciones.page').then(m => m.MisDireccionesPage) },
  { path: 'cambiar-password', loadComponent: () => import('./pages/cambiar-password/cambiar-password.page').then(m => m.CambiarPasswordPage) },
];