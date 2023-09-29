import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-ventas',
  templateUrl: './editar-ventas.page.html',
  styleUrls: ['./editar-ventas.page.scss'],
})
export class EditarVentasPage implements OnInit {
  formVenta: FormGroup;
  constructor(private fb: FormBuilder, private alertCtl: AlertController,private router: Router,  private loadingController: LoadingController ) {
    this.formVenta = this.fb.group({
      nombre: [''],
      codigoBodega: [''],
      ventas: [''],
    });
    
   }

  ngOnInit() {
    const formDataJSON = localStorage.getItem('ListaVenta');
    if (formDataJSON) {
      const formData = JSON.parse(formDataJSON);
      console.log(formData);
      this.formVenta.patchValue(formData);
    }
  }
  
  editar() {
    const formData = this.formVenta.value;
   const formDataJSON = JSON.stringify(formData);
   localStorage.setItem('ListaVenta', formDataJSON);
   this.mostrarLoading();
  }
  async mostrarLoading() {
    const loading = await this.loadingController.create({
      message: 'Editando...',
      duration: 2000, 
    });
    await loading.present();
    await loading.onDidDismiss();
    await this.mostrarAlerta();
  }
  

  async mostrarAlerta() {
    const alert = await this.alertCtl.create({
      header: 'Edición Completada',
      message: 'Los cambios se guardaron correctamente.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
          
            this.router.navigate(['/lista-ventas']);
          },
        },
      ],
    });

    await alert.present();
  }
}




