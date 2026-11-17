import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, IonText, IonItem, IonInput, 
  IonCheckbox, IonButton, AlertController 
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterLink, 
    IonContent, 
    IonText, 
    IonItem, 
    IonInput, 
    IonCheckbox, 
    IonButton
  ]
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async iniciarSesion() {
    if (!this.usuario.trim() || !this.password.trim()) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Por favor, llena tu correo/teléfono y tu contraseña para iniciar sesión.',
        buttons: ['Entendido']
      });
      await alert.present();
      return;
    }

    // Si ambos campos tienen datos, navega a Inicio
    this.router.navigate(['/inicio']);
  }
}