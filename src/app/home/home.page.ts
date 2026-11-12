
import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonIcon],
})
export class HomePage {

  constructor() {}

}