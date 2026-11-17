import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonText, IonList, IonItem, IonIcon, IonLabel,
  IonFooter, IonSegment, IonSegmentButton 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { person, home, key, logOutOutline, clipboardOutline } from 'ionicons/icons';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonText, IonList, IonItem, IonIcon, IonLabel,
    IonFooter, IonSegment, IonSegmentButton
  ]
})
export class PerfilPage {
  nombreUsuario: string = 'UsuarioX';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    addIcons({ person, home, key, logOutOutline, clipboardOutline });
  }

  ionViewWillEnter() {
    this.nombreUsuario = this.usuarioService.obtenerUsuario().nombre;
  }

  cerrarSesion() {
    this.usuarioService.limpiarSesion();
    this.router.navigate(['/login']);
  }
}