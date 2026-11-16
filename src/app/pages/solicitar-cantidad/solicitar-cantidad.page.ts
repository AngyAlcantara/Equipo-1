import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonText, IonRadioGroup, IonItem, IonRadio, 
  IonButton, IonFooter, IonSegment, IonSegmentButton, 
  IonLabel, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, clipboardOutline, person } from 'ionicons/icons';

@Component({
  selector: 'app-solicitar-cantidad',
  templateUrl: './solicitar-cantidad.page.html',
  styleUrls: ['./solicitar-cantidad.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonText, IonRadioGroup, IonItem, IonRadio, 
    IonButton, IonFooter, IonSegment, IonSegmentButton, 
    IonLabel, IonIcon
  ]
})
export class SolicitarCantidadPage {
  constructor() {
    addIcons({ homeOutline, clipboardOutline, person });
  }
}