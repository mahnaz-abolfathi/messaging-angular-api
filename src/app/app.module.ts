import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* custom added modules */

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PostComponent } from './components/posts/post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';



const appRoutes: Routes = [
  {path: '', component: PostComponent},
  {path: 'about', component: AboutComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PostComponent,
    PostItemComponent,
    AddPostComponent,
    AboutComponent,
    FooterComponent,
    AddCommentComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
