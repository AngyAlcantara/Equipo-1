import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonText, IonList, IonItem, IonIcon, IonLabel, IonFooter, IonSegment } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { person, home, key, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonSegment, IonFooter, 
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonText, IonList, IonItem, IonIcon, IonLabel
  ]
})
export class PerfilPage {
  constructor() {
    addIcons({ person, home, key, logOutOutline });
  }
}