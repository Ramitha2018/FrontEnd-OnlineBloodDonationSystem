import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router){}

  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.userType == 'admin'){
      return true;
    } else {
      this.router.navigate( ['profile']);
      return false;
    }
  }
}
