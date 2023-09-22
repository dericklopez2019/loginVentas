import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { TokenLoginInterceptor } from './services/token-login-interceptor'; 
import { TokenInterceptor } from './services/token-interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: HTTP_INTERCEPTORS, useClass: TokenLoginInterceptor, multi: true},
              { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
],
  bootstrap: [AppComponent],
})
export class AppModule {}
