import { Injectable } from '@angular/core';

export interface DatosUsuario {
  nombre: string;
  telefono: string;
  correo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly STORAGE_KEY = 'pipas_juarez_usuario';

  constructor() {}

  guardarUsuario(datos: DatosUsuario): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(datos));
  }

  obtenerUsuario(): DatosUsuario {
    const guardado = localStorage.getItem(this.STORAGE_KEY);
    if (guardado) {
      return JSON.parse(guardado);
    }
    return {
      nombre: 'UsuarioX',
      telefono: '271 000 0000',
      correo: 'correo@email.com'
    };
  }

  limpiarSesion(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}