import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '@services/token.service';
import { AuthService } from '@services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private tokenService: TokenService, private authService: AuthService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.tokenService.token;
        const refreshToken = this.tokenService.refreshToken;

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token,
                },
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json',
                },
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json'),
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error.error.error);
                if (error.status === 401) {
                    if (error.error.error === 'invalid_token') {
                        this.authService.refreshToken({ refresh: refreshToken }).subscribe(() => {
                            location.reload();
                        });
                    } else {
                        this.router.navigate(['login']).then(() => console.log('redirect to login'));
                    }
                }
                return throwError(error);
            })
        );
    }
}
