import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonText, IonInput, IonButton, 
  IonFooter, IonSegment, IonSegmentButton, IonLabel, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, clipboardOutline, person } from 'ionicons/icons';

@Component({
  selector: 'app-solicitar-direccion',
  templateUrl: './solicitar-direccion.page.html',
  styleUrls: ['./solicitar-direccion.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonText, IonInput, IonButton, 
    IonFooter, IonSegment, IonSegmentButton, IonLabel, IonIcon
  ]
})
export class SolicitarDireccionPage {
  constructor() {
    addIcons({ home, clipboardOutline, person });
  }
}