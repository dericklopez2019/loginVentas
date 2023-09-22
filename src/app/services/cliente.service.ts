import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Usuario } from '../models/usuario';
import { Observable, tap } from 'rxjs';
import { Vendedor } from '../models/vendedor';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlLogin:string;
  private urlInfo:string;

  constructor(private http:HttpClient, private config: ConfigService) {
    this.urlLogin = this.config.getUrl('clientelogin');
    this.urlInfo = this.config.getUrl('clienteinfo');

   }
   iniciar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlLogin, usuario);
  }

  listar(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.urlInfo, {})
      .pipe(tap(data => {
        return data;
        console.log(data);
      }));
      
  }
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }
}
