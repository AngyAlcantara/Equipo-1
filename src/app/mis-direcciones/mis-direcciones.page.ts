import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  homeOutline,
  locationOutline,
  addOutline,
  createOutline,
  trashOutline
} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  AlertController
} from '@ionic/angular';

interface Direccion {
  nombre: string;
  direccion: string;
  referencia: string;
  telefono: string;
  indicaciones: string;
}

@Component({
  selector: 'app-mis-direcciones',
  templateUrl: './mis-direcciones.page.html',
  styleUrls: ['./mis-direcciones.page.scss'],
  imports: [
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon
  ],
})
export class MisDireccionesPage {

  direcciones: Direccion[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private alertController: AlertController
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'home-outline': homeOutline,
      'location-outline': locationOutline,
      'add-outline': addOutline,
      'create-outline': createOutline,
      'trash-outline': trashOutline
    });
  }

  // Cargar direcciones al entrar a la pantalla
  ionViewWillEnter() {
    this.cargarDirecciones();
  }

  // Recuperar direcciones guardadas
  async cargarDirecciones() {
    try {
      const resultado = await Preferences.get({
        key: 'direcciones'
      });

      if (resultado.value) {
        const datos = JSON.parse(resultado.value);
        this.direcciones = Array.isArray(datos) ? datos : [];
      } else {
        this.direcciones = [];
      }

    } catch (error) {
      console.error('Error al cargar las direcciones:', error);
      this.direcciones = [];

    } finally {
      this.changeDetector.detectChanges();
    }
  }

  // Mostrar confirmación antes de eliminar
  async confirmarEliminar(indice: number) {

    const alerta = await this.alertController.create({
      header: 'Eliminar dirección',
      message: '¿Estás seguro de que deseas eliminar esta dirección?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel'
        },
        {
          text: 'ELIMINAR',
          role: 'destructive',
          handler: async () => {
            await this.eliminarDireccion(indice);
          }
        }
      ]
    });

    await alerta.present();
  }

  // Eliminar dirección seleccionada
  async eliminarDireccion(indice: number) {
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

      if (indice >= 0 && indice < direcciones.length) {

        // Quitar la dirección seleccionada
        direcciones.splice(indice, 1);

        // Actualizar almacenamiento
        await Preferences.set({
          key: 'direcciones',
          value: JSON.stringify(direcciones)
        });

        // Actualizar la pantalla
        this.direcciones = direcciones;
        this.changeDetector.detectChanges();
      }

    } catch (error) {
      console.error('Error al eliminar la dirección:', error);
    }
  }

}