import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { PostsComponent } from './view/posts/posts.component';
import { AnimationDefaultComponent } from './view/animation-default/animation-default.component';
import { UserComponent } from './view/user/user.component';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './services/userService.service';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './view/editPost/editPost.component';
import { SinglePostComponent } from './view/singlePost/singlePost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PostsComponent,
    AnimationDefaultComponent,
    UserComponent, EditPostComponent, SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
