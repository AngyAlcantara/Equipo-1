import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  homeOutline,
  chevronForwardOutline
} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonInput,
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-solicitar-pipa',
  templateUrl: './solicitar-pipa.page.html',
  styleUrls: ['./solicitar-pipa.page.scss'],
  imports: [
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonRadioGroup,
    IonRadio,
    IonInput
  ],
})
export class SolicitarPipaPage {

  // Cantidad seleccionada
  cantidadSeleccionada = '';

  // Cantidad personalizada
  otraCantidad = '';

  // Cantidad final validada
  cantidadFinal: number | null = null;

  constructor(
    private alertController: AlertController
  ) {
    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'home-outline': homeOutline,
      'chevron-forward-outline': chevronForwardOutline
    });
  }

  // Detectar el cambio de opción
  cambiarCantidad(event: CustomEvent<{ value: string }>) {

    this.cantidadSeleccionada = event.detail.value;

    // Limpiar la cantidad personalizada si cambia de opción
    if (this.cantidadSeleccionada !== 'otra') {
      this.otraCantidad = '';
    }
  }

  // Leer lo que se escribe en el campo
  actualizarOtraCantidad(
    event: CustomEvent<{ value?: string | number | null }>
  ) {

    this.otraCantidad = String(event.detail.value ?? '');
  }

  // Validar y continuar
  async continuar() {

    this.cantidadFinal = null;

    // Comprobar que se haya seleccionado una opción
    if (!this.cantidadSeleccionada) {

      await this.mostrarAlerta(
        'Cantidad requerida',
        'Selecciona cuánta agua necesitas.'
      );

      return;
    }

    // Validar cantidad personalizada
    if (this.cantidadSeleccionada === 'otra') {

      const cantidad = Number(this.otraCantidad);

      if (
        !this.otraCantidad.trim() ||
        !Number.isFinite(cantidad) ||
        cantidad <= 0
      ) {

        await this.mostrarAlerta(
          'Cantidad incorrecta',
          'Ingresa una cantidad de litros válida, mayor que cero.'
        );

        return;
      }

      this.cantidadFinal = cantidad;

    } else {

      this.cantidadFinal = Number(this.cantidadSeleccionada);

    }

    // Mostrar confirmación
    await this.mostrarAlerta(
      'Cantidad seleccionada',
      `Has seleccionado ${this.cantidadFinal.toLocaleString('es-MX')} litros.`
    );

  }

  // Mostrar cuadro emergente
  async mostrarAlerta(titulo: string, mensaje: string) {

    const alerta = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'ACEPTAR',
          role: 'confirm'
        }
      ],
      backdropDismiss: false
    });

    await alerta.present();
  }

}