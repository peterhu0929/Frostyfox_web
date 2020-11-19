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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
