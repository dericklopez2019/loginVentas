import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TOKEN_BACKEND = 'login-token';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token=localStorage.getItem(TOKEN_BACKEND);
    console.log(token);
    if(token){
      req = req.clone({ headers: new HttpHeaders({ 'Authorization': token }) });
    }
    return next.handle(req);
  }
}