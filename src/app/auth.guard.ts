import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './shared/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor (public auth: AuthService,
                 private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.auth.isAutorized) {
          return true;
      } else {
          this.auth.url = state.url;
          this.router.navigate(['login']);
      }
  }
}
