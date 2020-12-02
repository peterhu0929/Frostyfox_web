import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './programs/story/story.component';
import { PipeModule } from './pipe/pipe.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';// <-- NgModel lives here
import { ProductComponent } from './programs/product/product.component';
import { ShareDialogComponent } from './share/share-dialog/share-dialog.component';
import { ProductEditComponent } from './programs/product-edit/product-edit.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StoryComponent,
    ShareDialogComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '878583083538-ihdvqifjlp4jvt5887itldsojas1u72m.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
