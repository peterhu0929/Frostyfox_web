import { HomeComponent } from './programs/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { StoryComponent } from './programs/story/story.component';
import { ProductComponent } from './programs/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'story', component: StoryComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
