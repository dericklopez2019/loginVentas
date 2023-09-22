import { Component } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Observable<Componente[]>;

  constructor(private service: ClienteService) {
    this.componentes = this.service.getMenuOpts();
  }
}
