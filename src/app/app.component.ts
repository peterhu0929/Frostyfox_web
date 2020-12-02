import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frostyfox';
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.getUserInfo();
  }


  getUserInfo() {
    this.authService.authState.subscribe(x => {
      this.user = x;
      this.loggedIn = (x != null);
      console.log(this.user);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    const refresh$ = of(this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID));
    refresh$.subscribe(x => this.getUserInfo());
  }

}
