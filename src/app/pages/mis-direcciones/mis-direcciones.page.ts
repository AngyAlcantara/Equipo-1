import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonIcon, IonText, IonButton 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, add } from 'ionicons/icons';

@Component({
  selector: 'app-mis-direcciones',
  templateUrl: './mis-direcciones.page.html',
  styleUrls: ['./mis-direcciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonIcon, IonText, IonButton
  ]
})
export class MisDireccionesPage {
  constructor() {
    addIcons({ home, add });
  }
}
