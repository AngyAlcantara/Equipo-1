import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonText, IonInput, IonButton, AlertController 
} from '@ionic/angular';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonText, IonInput, IonButton
  ]
})
export class DatosPersonalesPage {
  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    const datos = this.usuarioService.obtenerUsuario();
    this.nombre = datos.nombre;
    this.telefono = datos.telefono;
    this.correo = datos.correo;
  }

  async guardarCambios() {
    this.usuarioService.guardarUsuario({
      nombre: this.nombre.trim(),
      telefono: this.telefono.trim(),
      correo: this.correo.trim()
    });

    const alert = await this.alertController.create({
      header: 'Datos actualizados',
      message: 'Tus datos personales se guardaron correctamente.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}