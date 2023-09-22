import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  getUrl(key: any): string {
    return Env.host + Env.url[key];
  }
  
}

export const Env={
  host:'http://192.168.2.116:5012', //ip local

  url: {
    clientelogin:'/login',
    clienteinfo: '/vendedor'
    
    
  }

}