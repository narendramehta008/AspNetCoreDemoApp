import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenModel } from 'src/app/shared/models/token-models';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/auth/login') === false) {
      let token = '';
      const tokenDetails = localStorage.getItem(environment.tokenName) || null;
      if (tokenDetails) {
        let tempTokenDetail: TokenModel = JSON.parse(tokenDetails);
        token = tempTokenDetail.token;
      }
      // request = request.clone({
      //   headers: request.headers.set('Authorization', `Bearer ${token}`),
      // });
    }
    return next.handle(request);
  }
}
