import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonText, IonButton, IonFooter, IonSegment, 
  IonSegmentButton, IonLabel, IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, clipboardOutline, person } from 'ionicons/icons';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonText, IonButton, IonFooter, IonSegment, 
    IonSegmentButton, IonLabel, IonIcon
  ]
})
export class InicioPage {
  nombreUsuario: string = 'usuarioX';

  constructor(private usuarioService: UsuarioService) {
    addIcons({ home, clipboardOutline, person });
  }

  ionViewWillEnter() {
    this.nombreUsuario = this.usuarioService.obtenerUsuario().nombre;
  }
}