import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonText, IonInput, IonButton 
} from '@ionic/angular';

@Component({
  selector: 'app-solicitar-fecha',
  templateUrl: './solicitar-fecha.page.html',
  styleUrls: ['./solicitar-fecha.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonText, IonInput, IonButton
  ]
})
export class SolicitarFechaPage {}