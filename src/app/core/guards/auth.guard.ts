import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Auth Services
import { environment } from '../../../environments/environment';
import {JwtAuthService} from "../services/jwt-auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private jwtAuthService: JwtAuthService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( this.jwtAuthService.isTokenExpired() === false) {
            const authorized = this.jwtAuthService.isAuthorizedRoles([
                route.data['role'],
                'SUPER_ADMIN',
            ])
            if (authorized === false) {
                this.router.navigate(['not-authorized'])
            }
            return authorized
        }
        this.router.navigate(['/authentication/login'], {
            queryParams: { returnUrl: this.jwtAuthService.getRetourUrl() },
        })
        return false
    }
}
