import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './view/about/about.component';
import { AnimationDefaultComponent } from './view/animation-default/animation-default.component';
import { EditPostComponent } from './view/editPost/editPost.component';
import { HomeComponent } from './view/home/home.component';
import { PostsComponent } from './view/posts/posts.component';
import { SinglePostComponent } from './view/singlePost/singlePost.component';
import { UserComponent } from './view/user/user.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'posts', component: PostsComponent },
{ path: 'defaultanim', component: AnimationDefaultComponent },
{ path: 'users', component: UserComponent },
{ path: 'post/:id', component: SinglePostComponent },
{ path: 'updatepost/:id', component: EditPostComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
