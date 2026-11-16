import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonText, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmark } from 'ionicons/icons';

@Component({
  selector: 'app-pedido-confirmado',
  templateUrl: './pedido-confirmado.page.html',
  styleUrls: ['./pedido-confirmado.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, CommonModule, RouterLink, IonContent, IonIcon, IonText, IonButton]
})
export class PedidoConfirmadoPage {
  constructor() {
    addIcons({ checkmark });
  }
}