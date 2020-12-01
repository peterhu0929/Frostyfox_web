import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './programs/story/story.component';
import { PipeModule } from './pipe/pipe.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ProductComponent } from './programs/product/product.component';
import { ShareDialogComponent } from './share/share-dialog/share-dialog.component';
import { ProductEditComponent } from './programs/product-edit/product-edit.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule, Router } from '@angular/router';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard,
  OktaAuthService
} from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-4235072.okta.com/oauth2/default',
  // redirectUri: window.location.origin + '/login/callback',
  redirectUri: window.location.origin,
  // redirectUri: 'http://localhost:4200/product',
  clientId: '0oa1duawxjEWLwthl5d6',
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StoryComponent,
    ShareDialogComponent,
    ProductEditComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: config }, OktaAuthService, OktaAuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
