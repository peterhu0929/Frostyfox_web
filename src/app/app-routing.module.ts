import { StoryComponent } from './programs/story/story.component';
import { ProductComponent } from './programs/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'product', component: ProductComponent }
  , { path: 'story', component: StoryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
