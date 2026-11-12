import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  homeOutline
} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonInput,
  IonTextarea
} from '@ionic/angular';

interface Direccion {
  nombre: string;
  direccion: string;
  referencia: string;
  telefono: string;
  indicaciones: string;
}

@Component({
  selector: 'app-agregar-direccion',
  templateUrl: './agregar-direccion.page.html',
  styleUrls: ['./agregar-direccion.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonInput,
    IonTextarea
  ],
})
export class AgregarDireccionPage implements OnInit {

  nombre = '';
  direccion = '';
  referencia = '';
  telefono = '';
  indicaciones = '';

  mensajeError = '';

  indiceEdicion: number | null = null;
  modoEdicion = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'home-outline': homeOutline
    });
  }

  ngOnInit() {
    const indice = this.route.snapshot.queryParamMap.get('editar');

    if (indice !== null) {
      this.indiceEdicion = Number(indice);
      this.modoEdicion = true;
      this.cargarDireccion();
    }
  }

  // Cargar dirección seleccionada
  async cargarDireccion() {
    try {
      const resultado = await Preferences.get({
        key: 'direcciones'
      });

      if (resultado.value) {
        const direcciones: Direccion[] = JSON.parse(resultado.value);

        if (
          Array.isArray(direcciones) &&
          this.indiceEdicion !== null &&
          direcciones[this.indiceEdicion]
        ) {
          const actual = direcciones[this.indiceEdicion];

          this.nombre = actual.nombre;
          this.direccion = actual.direccion;
          this.referencia = actual.referencia;
          this.telefono = actual.telefono;
          this.indicaciones = actual.indicaciones;

        } else {
          this.mensajeError = 'No se encontró la dirección seleccionada.';
        }
      }

    } catch (error) {
      console.error('Error al cargar la dirección:', error);
      this.mensajeError = 'No se pudieron cargar los datos.';
    }
  }

  // Guardar dirección nueva o editar
  async guardarDireccion() {

    if (
      !this.nombre.trim() ||
      !this.direccion.trim() ||
      !this.telefono.trim()
    ) {
      this.mensajeError =
        'Completa el nombre, la dirección y el teléfono.';
      return;
    }

    try {
      const resultado = await Preferences.get({
        key: 'direcciones'
      });

      let direcciones: Direccion[] = [];

      if (resultado.value) {
        const datos = JSON.parse(resultado.value);

        if (Array.isArray(datos)) {
          direcciones = datos;
        }
      }

      const nuevaDireccion: Direccion = {
        nombre: this.nombre.trim(),
        direccion: this.direccion.trim(),
        referencia: this.referencia.trim(),
        telefono: this.telefono.trim(),
        indicaciones: this.indicaciones.trim()
      };

      if (
        this.modoEdicion &&
        this.indiceEdicion !== null &&
        direcciones[this.indiceEdicion]
      ) {
        direcciones[this.indiceEdicion] = nuevaDireccion;

      } else {
        direcciones.push(nuevaDireccion);
      }

      await Preferences.set({
        key: 'direcciones',
        value: JSON.stringify(direcciones)
      });

      await this.router.navigateByUrl('/mis-direcciones');

    } catch (error) {
      console.error('Error al guardar la dirección:', error);

      this.mensajeError =
        'No se pudo guardar la dirección. Inténtalo nuevamente.';
    }
  }

}