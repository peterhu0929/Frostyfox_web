import { Component, OnInit } from '@angular/core';
import { OAuthModule, OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { of } from 'rxjs/internal/observable/of';
import { authCodeFlowConfig } from './sso.config';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Frostyfox';
  isAuthenticated;

  AccessToken;
  userProfile;
  IdentityClaims;

  constructor(private oAuthService: OAuthService) {
    this.configureSingleSignOn();
  }
  ngOnInit() {
    this.oAuthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(
        x => { this.getUserProfile(); this.getToken(); this.getIdentityClaims(); }
      );
  }
  configureSingleSignOn() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    // this.oAuthService.events
    //   .pipe(filter(e => e.type === 'token_received'))
    //   .subscribe(
    //     x => { this.Test(); console.log(x); }
    //   );
  }
  login() {
    this.oAuthService.initImplicitFlow();
    // login$.subscribe(x => this.Test());
  }
  logout() {
    this.oAuthService.logOut();
  }
  getToken() {
    this.AccessToken = this.oAuthService.getAccessToken();
    console.log(this.AccessToken);
  }
  getUserProfile() {
    this.oAuthService.loadUserProfile().then(
      x => {
        this.userProfile = JSON.parse(JSON.stringify(x)),
          console.log(this.userProfile);
      }
    );
  }
  getIdentityClaims() {
    this.IdentityClaims = this.oAuthService.getIdentityClaims();
    console.log(this.IdentityClaims);
  }

  get Token() {
    let claims: any = this.oAuthService.getIdentityClaims();
    // console.log(claims);
    return claims ? claims : null;
  }
}

