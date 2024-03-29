import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('passing in NoopInterceptor', request.url);
    // Ajoute un header "bidon"
    const modifiedReq = request.clone({
      headers: request.headers.set('X-Noop-Header', 'noop')
    });
    return next.handle(modifiedReq);
  }
}
