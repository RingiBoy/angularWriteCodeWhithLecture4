import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserService} from './services/user/user.service';
import {AllUserComponent} from './components/all-user/all-user.component';
import {SingleUserComponent} from './components/single-user/single-user.component';
import {UserResolveService} from './services/user/user-resolve.service';
import {NexRouteService} from './services/nex-route.service';
// import {AllCommentComponent} from './components/all-comment/all-comment.component';
import {AllPostComponent} from './components/all-post/all-post.component';
import {PostService} from './services/post/post.service';
import {CommentsOfPostComponent} from './components/comments-of-post/comments-of-post.component';
import {CommentResolveService} from './services/comment/comment-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    SingleUserComponent,
    // AllCommentComponent,
    AllPostComponent,
    CommentsOfPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUserComponent,
        resolve: {xxx: UserResolveService},
        canActivate: [NexRouteService],
        children: [
          {path: ':id', component: SingleUserComponent}
        ]
      },
      {path: 'posts/:id/comments', component: CommentsOfPostComponent,
        resolve: {resolvComments: CommentResolveService}

      }

    ])
  ],
  providers: [UserService, UserResolveService, NexRouteService, PostService, CommentResolveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
