import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonContent, IonText, IonItem, IonInput, 
  IonCheckbox, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, 
    CommonModule, 
    RouterLink, 
    IonContent, 
    IonText, 
    IonItem, 
    IonInput, 
    IonCheckbox, 
    IonButton
  ]
})
export class LoginPage {}
