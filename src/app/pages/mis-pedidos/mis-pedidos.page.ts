import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonCard, IonCardContent, IonText, 
  IonIcon, IonFooter, IonSegment, IonSegmentButton, IonLabel 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmark, home, clipboardOutline, person } from 'ionicons/icons';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.page.html',
  styleUrls: ['./mis-pedidos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonCard, IonCardContent, IonText, 
    IonIcon, IonFooter, IonSegment, IonSegmentButton, IonLabel
  ]
})
export class MisPedidosPage {
  constructor() {
    addIcons({ checkmark, home, clipboardOutline, person });
  }
}