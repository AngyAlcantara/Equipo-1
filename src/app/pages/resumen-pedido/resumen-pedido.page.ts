import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonText, IonInput, IonButton 
} from '@ionic/angular';

@Component({
  selector: 'app-resumen-pedido',
  templateUrl: './resumen-pedido.page.html',
  styleUrls: ['./resumen-pedido.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonText, IonInput, IonButton
  ]
})
export class ResumenPedidoPage {}