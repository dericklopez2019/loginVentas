import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]>;
  constructor(private menuCtrl: MenuController, private service: ClienteService ) { }

  ngOnInit() {
    this.componentes = this.service.getMenuOpts();
  }
  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
