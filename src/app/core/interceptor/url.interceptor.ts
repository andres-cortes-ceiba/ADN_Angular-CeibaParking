import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlInterceptor<T> implements HttpInterceptor {

  intercept(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      url : environment.endpoint + request.url
    });

    return next.handle(req);
  }
}
