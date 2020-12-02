import { Component } from '@angular/core';
import { OAuthModule, OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { authCodeFlowConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Frostyfox';
  isAuthenticated;

  AccessToken;
  userProfile;
  constructor(private oAuthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }
  login() {
    this.oAuthService.initImplicitFlow();
  }
  logout() {
    this.oAuthService.logOut();
  }
  getToken() {
    let AccessToken = this.oAuthService.getAccessToken();
    console.log(AccessToken);
  }
  Test() {
    this.oAuthService.loadUserProfile().then(
      x => {
        this.userProfile = x,
          console.log(this.userProfile.email);
      }
    );
  }
  get Token() {
    let claims: any = this.oAuthService.getIdentityClaims();
    // console.log(claims);
    return claims ? claims : null;
  }
}

