import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';

import { AuthenService } from './authen.service';

@Injectable()
export class AuthenGuardService implements CanActivate {
    constructor(private authenService: AuthenService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authenService.user != null) {
            return true;
        }
        else {
            this.authenService.url = url;
            this.router.navigate(['/login']);
            return false;
        }
    }
}