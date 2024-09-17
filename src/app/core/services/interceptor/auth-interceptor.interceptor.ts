import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { User } from '../../models/user'
import { Router } from '@angular/router'
import {StorageService} from "../storageService";
import {JwtAuthService} from "../jwt-auth.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  users: User[] = []
  private AUTH_HEADER = 'Authorization'
  private readonly token: string

  constructor(private jwtService: JwtAuthService, private router: Router,private store: StorageService) {
    this.token = store.retrieveValue('accessToken')
    const user: User = { ...store.retrieveValue('user'), token: this.token }
    this.users.push(user)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'POST') {
      switch (request.url) {
        case '/api/auth/login': {
          // @ts-ignore
          const { username, password } = request.body
          const user: any = this.users.find(item => item.username === username)
          const error = user ? 'Something went wrong.' : 'Login failed, please try again'
          if (user) {
            return of(new HttpResponse({ status: 200, body: user }))
          }
          return of(new HttpResponse({ status: 401, body: error }))
        }
      }
    }
    request = this.addAuthenticationToken(request)
    return next.handle(request)
  }
  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.store.retrieveValue('accessToken')
    if (!token) {
      return request
    }
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + token),
    })
  }
}
