import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';
import { UrlInterceptor } from './interceptor/url.interceptor';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToolbarComponent, NavbarComponent],
  providers: [
    HttpService,
    { provide: ErrorHandler, useClass: ManejadorError },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true}
  ]
})
export class CoreModule { }
