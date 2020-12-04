import { ProgramsService } from './../programs/programs.service';
import { SocialAuthService } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: SocialAuthService
    , private router: Router
    , private programService: ProgramsService) {
  }
  loggedIn: boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.router.navigate(['/']);
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): true | UrlTree {
    this.authService.authState.subscribe(
      x => {
        this.loggedIn = (x != null),
          console.log(x);
        console.log('logged=>1' + this.loggedIn);
      }
    );
    if (this.loggedIn) {
      console.log('logged=>2' + this.loggedIn);
      return true;
    }
    else {
      console.log('logged=>3' + this.loggedIn);
      // console.log('AuthGuard#canActivate 被觸發了, 你沒有授權！將跳轉回前台頁面');
      this.programService.OpenSanckBar('Hello', 'Please login first,thanks');
      return this.router.parseUrl('/home');
    }
  }

}
