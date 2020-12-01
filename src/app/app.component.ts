import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthGuard, OktaAuthService } from '@okta/okta-angular';
import { ok } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frostyfox';
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    // Subscribe to authentication state changes
    console.log('config', oktaAuth);
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }
  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }
  login() {
    // this.oktaAuth.handleLoginRedirect('/product');
    // this.oktaAuth.handleLoginRedirect('/product');
    this.router.navigateByUrl('/story');
    // alert('OK');
  }
  async logout() {
    // Terminates the session with Okta and removes current tokens.
    await this.oktaAuth.signOut();
    this.router.navigateByUrl('/');
  }
}




