import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signIn;
  LogoInfo;
  RouterService;
  widget = new OktaSignIn({
    baseUrl: 'https://dev-4235072.okta.com/oauth2/default',
    authParams: {
      pkce: true
    }
  });
  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.signIn = oktaAuth;
    this.RouterService = router;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          case '/login':
            break;
          case '/protected':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.widget.renderEl({
      el: '#okta-signin-container'
    },
      (res) => {
        if (res.status === 'SUCCESS') {
          console.log(res);
          this.LogoInfo = res.user;

          // write cookie & expire date
          // document.cookie = `sessionToken=${res.session.token};)}; path=/`;
          // this.signIn.loginRedirect('/Product', { sessionToken: res.session.token });

          this.signIn.signInWithRedirect({
            originalUri: '/story'
          });

          // this.RouterService.navigateByUrl('/product');
          // Hide the widget
          this.widget.hide();
        }
      },
      (err) => {
        throw err;
      }
    );
  }
}

