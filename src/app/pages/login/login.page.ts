import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { 
  IonContent, IonText, IonItem, IonInput, 
  IonCheckbox, IonButton, AlertController 
} from '@ionic/angular';
import { UsuarioService } from '../../services/usuario';

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
    private alertController: AlertController,
    private usuarioService: UsuarioService
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

    const actual = this.usuarioService.obtenerUsuario();
    const entrada = this.usuario.trim();
    const esCorreo = entrada.includes('@');

    // Si ya estaba registrado con ese correo o teléfono, conserva su nombre; si no, extrae uno
    const nombreMostrar = (actual.correo === entrada || actual.telefono === entrada)
      ? actual.nombre
      : (esCorreo ? entrada.split('@')[0] : entrada);

    this.usuarioService.guardarUsuario({
      nombre: nombreMostrar,
      telefono: esCorreo ? actual.telefono : entrada,
      correo: esCorreo ? entrada : actual.correo
    });

    this.router.navigate(['/inicio']);
  }
}