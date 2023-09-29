import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { Vendedor } from 'src/app/models/vendedor';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.page.html',
  styleUrls: ['./lista-ventas.page.scss'],
})
export class ListaVentasPage implements OnInit {
  vendedores: Vendedor[] = [];
  componentes: Observable<Componente[]>;
  lista: any[]=[];
  fromDataBase: boolean= true;
  constructor(private service: ClienteService, private router:Router, private route: ActivatedRoute) { }
  
  ngOnInit() {  
    if(this.fromDataBase)
    this.mostrarInfo();
  }

  ionViewDidEnter() {
    if(!this.fromDataBase)
    {
      this.vendedores= JSON.parse(localStorage.getItem('ListadoVenta')); 
    }

  }
  mostrarInfo() {

    this.service.listar().subscribe(data=>{
      
      const formDataJSON = JSON.stringify(data);

      localStorage.setItem('ListadoVenta', formDataJSON);
      
      this.vendedores= JSON.parse(localStorage.getItem('ListadoVenta')); 
      this.fromDataBase=false;
    });
    
  }
  onClick(item)
  {
    const itemId = item.id;
    const listaVentaJSON = localStorage.getItem('ListadoVenta');
    let listaVenta = [];

    if (listaVentaJSON) {
      listaVenta = JSON.parse(listaVentaJSON);
    }

    const elementoEncontrado = listaVenta.find((elemento) => elemento.id === itemId);
    console.log(elementoEncontrado);

  //   const formData = item;
  //  const formDataJSON = JSON.stringify(formData);
  //  localStorage.setItem('ListaVenta', formDataJSON);
  //   console.log(item);
    this.router.navigate(['editar-ventas'])
  }
}
