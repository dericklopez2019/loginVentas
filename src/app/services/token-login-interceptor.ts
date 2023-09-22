import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const TOKEN_BACKEND = 'login-token';


@Injectable()
export class TokenLoginInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(map(event => {
      if (event instanceof HttpResponse) {
        if (event.url.endsWith('login')) {
          const token = event.headers.get('Authorization') || null;
          if (token) {
            localStorage.setItem(TOKEN_BACKEND, token);
          }
        }
      }
      return event;
    }));
  }
}