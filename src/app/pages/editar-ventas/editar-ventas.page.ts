import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-ventas',
  templateUrl: './editar-ventas.page.html',
  styleUrls: ['./editar-ventas.page.scss'],
})
export class EditarVentasPage implements OnInit {

  formVenta: FormGroup;
  constructor(private fb: FormBuilder, ) {
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
  }

}
