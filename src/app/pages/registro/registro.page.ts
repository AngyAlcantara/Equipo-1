import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonText, IonInput, IonButton, AlertController 
} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonText, IonInput, IonButton
  ]
})
export class RegistroPage {
  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async crearCuenta() {
    if (!this.nombre.trim() || !this.telefono.trim() || !this.correo.trim() || !this.password.trim()) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Por favor, llena todos los campos (Nombre, Teléfono, Correo y Contraseña) para crear tu cuenta.',
        buttons: ['Entendido']
      });
      await alert.present();
      return;
    }

    // Si los 4 campos están llenos, navega a Inicio
    this.router.navigate(['/inicio']);
  }
}