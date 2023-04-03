import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate() {
    console.log('AuthGuard:: ' + this.authService.isAuthenticated());

    return true;

    // return this.authService.isAuthenticated().pipe(
    //   map((isLogin) => {
    //     console.log(isLogin);
    //     if (!isLogin) {
    //       this.router.navigate(['/auth']);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // );
  }

  // canActivate() {
  //   return this.authService.isAuthenticated()
  //     .pipe(
  //       tap(authenticated => {
  //         if (!authenticated) {
  //           this.router.navigate(['/auth']);
  //           return false
  //         }
  //         return true
  //       }),
  //     );
  // }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {

  //     // if(this.authService.isAuthenticated()){
  //     //  this.router.navigate(['/pages']);
  //     // }

  //     return true

  //   //   return true
  //   // // return new Promise((resolve) => {
  //   // //   this.authService.isAuthenticated().subscribe((res) => {
  //   // //     if (res) {
  //   // //       this.router.navigate(['/pages']);
  //   // //     }
  //   // //     resolve(!res);
  //   // //   });
  //   // // });
  // }
}
