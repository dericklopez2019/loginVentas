import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/models/vendedor';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.page.html',
  styleUrls: ['./lista-ventas.page.scss'],
})
export class ListaVentasPage implements OnInit {
  vendedor: Vendedor[] = [];

  constructor(private service: ClienteService, private router:Router) { }

  ngOnInit() {
    this.mostrarInfo();
  }
  mostrarInfo() {
    this.service.listar().subscribe(data=>{
      this.vendedor = data;
      console.log(this.vendedor);
    });
  }
  onClick(item)
  {
    const formData = item;
   const formDataJSON = JSON.stringify(formData);
   localStorage.setItem('ListaVenta', formDataJSON);
    console.log(item);
    this.router.navigate(['editar-ventas'])
  }
}
