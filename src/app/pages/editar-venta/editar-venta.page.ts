import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.page.html',
  styleUrls: ['./editar-venta.page.scss'],
})
export class EditarVentaPage implements OnInit {

  formVenta: FormGroup;
  constructor(private fb: FormBuilder, ) {
    this.formVenta = this.fb.group({
      nombre: ['', [ Validators.required]],
      codigoBodega: ['', Validators.required],
      ventas: ['',[Validators.required]],
      
  
    });
   }

  ngOnInit() {
    const formDataJSON = localStorage.getItem('formVenta');
    if (formDataJSON) {
      const formData = JSON.parse(formDataJSON);
      console.log(formData);
      this.formVenta.patchValue(formData);
    }
  }
  editar() {
    const formData = this.formVenta.value;
   const formDataJSON = JSON.stringify(formData);
   localStorage.setItem('formVenta', formDataJSON);
  }

}
