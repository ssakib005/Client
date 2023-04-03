import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}


  canActivate() {
    console.log('AuthGuard:: ' + this.authService.isAuthenticated());

    return true;

    // return this.authService.isAuthenticated().pipe(
    //   map((isLogin) => {
    //     console.log(isLogin);
    //     if (isLogin) {
    //       this.router.navigate(['/pages']);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // );
  }
}
