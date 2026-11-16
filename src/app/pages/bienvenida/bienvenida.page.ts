import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonText, IonButton, IonHeader, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, CommonModule, RouterLink, IonContent, IonText, IonButton]
})
export class BienvenidaPage {}