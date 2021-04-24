import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '@services/token.service';
import { AuthService } from '@services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private readonly _router: Router,
        private readonly _tokenService: TokenService,
        private readonly _authService: AuthService
    ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this._tokenService.token;
        const refreshToken = this._tokenService.refreshToken;

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
                        this._authService.refreshToken({ refresh: refreshToken }).subscribe(() => {
                            location.reload();
                        });
                    } else {
                        this._router.navigate(['login']).then(() => console.log('redirect to login'));
                    }
                }
                return throwError(error);
            })
        );
    }
}
