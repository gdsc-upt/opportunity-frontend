import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.tokenService.refreshToken) {
            return true;
        }

        this.authService.redirectUrl = url;

        this.router.navigate(['/auth/login']).then(() => false);
    }
}
