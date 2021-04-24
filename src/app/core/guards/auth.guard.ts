import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly _authService: AuthService,
        private readonly _tokenService: TokenService,
        private readonly _router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url: string = state.url;
        return this._checkLogin(url);
    }

    private _checkLogin(url: string): boolean {
        if (this._tokenService.refreshToken) {
            return true;
        }

        this._authService.redirectUrl = url;

        this._router.navigate(['/auth/login']).then();
    }
}
