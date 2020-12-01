import { StoryComponent } from './programs/story/story.component';
import { ProductComponent } from './programs/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

export function onAuthRequired(oktaAuth, injector) {
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}
const routes: Routes = [{
  path: 'product', component: ProductComponent
  // ,
  // canActivate: [OktaAuthGuard],
  // data: {
  //   onAuthRequired
  // }
}
  , { path: 'story', component: StoryComponent }
  ,
{
  path: 'login/callback',
  component: OktaCallbackComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'protected',
  component: ProtectedComponent,
  canActivate: [OktaAuthGuard],
  data: {
    onAuthRequired
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
