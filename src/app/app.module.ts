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


@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUserComponent,
        resolve: {xxx: UserResolveService},
        canActivate: [NexRouteService],
        children: [
          {path: ':id', component: SingleUserComponent}
        ]
      },
    ])
  ],
  providers: [UserService, UserResolveService, NexRouteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
