import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup   } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  vendedor: Vendedor[] = [];
  id: number;
  nombre: string;
  formUsuario: FormGroup;
  constructor(private fb: FormBuilder , private service: ClienteService, private router:Router) {
    this.formUsuario = this.fb.group({
      nombre: ['', [ Validators.required]],
      clave: ['', Validators.required],
    });
   }
  ngOnInit() {
    localStorage.removeItem('login-token');
    localStorage.removeItem('formVenta');
    localStorage.removeItem('ListaVenta');
  }
  Login(){
    this.service.iniciar(this.formUsuario.value).subscribe(data=>{
      console.log(data);
     this.router.navigate(['inicio']);
    });
    console.log(this.formUsuario.value);
   

  }
 

}
