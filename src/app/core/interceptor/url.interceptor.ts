import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlInterceptor<T> implements HttpInterceptor {

  intercept(request: HttpRequest<T>, next: HttpHandler) {
    const req = request.clone({
      url : environment.endpoint + request.url
    });

    return next.handle(req);
  }
}
