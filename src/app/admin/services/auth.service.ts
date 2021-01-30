import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
    LoginRequestData,
    LoginResponseData,
    RefreshTokenRequestData,
    RefreshTokenResponseData,
    RegisterRequestData,
} from '../models/auth-models';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const API_URL = '/api/auth/';
const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET),
    }),
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private tokenService: TokenService) {}

    private static _handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }

    private static _log(message: string): any {
        console.log(message);
    }

    login(data: LoginRequestData): Observable<LoginResponseData> {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
        const body = new HttpParams().set('email', data.email).set('password', data.password);

        return this.http.post<LoginResponseData>(API_URL + 'login/', body, HTTP_OPTIONS).pipe(
            tap((res) => {
                this.tokenService.token = res.access_token;
                this.tokenService.refreshToken = res.refresh_token;
            }),
            catchError(AuthService._handleError)
        );
    }

    refreshToken(data: RefreshTokenRequestData): Observable<RefreshTokenResponseData> {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
        const body = new HttpParams().set('refresh', data.refresh);
        return this.http.post<RefreshTokenResponseData>(API_URL + 'token/refresh/', body, HTTP_OPTIONS).pipe(
            tap((res) => {
                this.tokenService.token = res.access;
                this.tokenService.refreshToken = res.access;
            }),
            catchError(AuthService._handleError)
        );
    }

    logout(): Observable<any> {
        this.tokenService.removeToken();
        this.tokenService.removeRefreshToken();
        return this.http.post(API_URL + 'logout/', {});
    }

    register(data: any): Observable<RegisterRequestData> {
        return this.http.post<RegisterRequestData>(API_URL + 'registration/', data).pipe(
            tap(() => AuthService._log('register')),
            catchError(AuthService._handleError)
        );
    }

    verifyToken(): Observable<RefreshTokenResponseData> {
        const body = { token: this.tokenService.token };
        return this.http
            .post<RefreshTokenResponseData>(API_URL + 'token/verify/', body)
            .pipe(catchError(AuthService._handleError));
    }
}
