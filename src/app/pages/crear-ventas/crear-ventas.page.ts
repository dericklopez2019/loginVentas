import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-ventas',
  templateUrl: './crear-ventas.page.html',
  styleUrls: ['./crear-ventas.page.scss'],
})
export class CrearVentasPage implements OnInit {

  formVenta: FormGroup;
  constructor(private fb: FormBuilder, ) {
    this.formVenta = this.fb.group({
      nombre: ['', [ Validators.required]],
      codigoBodega: ['', Validators.required],
      venta: ['',[Validators.required]],
      
  
    });
   }

  ingresar() {
   const formData = this.formVenta.value;
   const formDataJSON = JSON.stringify(formData);
   localStorage.setItem('formVenta', formDataJSON);
   
  } 
  obtener(){
    const formDataJSON = localStorage.getItem('formVenta');
    if (formDataJSON) {
      const formData = JSON.parse(formDataJSON);
      console.log(formData);
      this.formVenta.patchValue(formData);
    }
  }

  ngOnInit() {
  }

}
