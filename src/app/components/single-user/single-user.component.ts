import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';
import {PostService} from '../../services/post/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  user: User;
  postOfUser: Post[];
  // constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  //   this.activatedRoute.params.subscribe(paramss => console.log(paramss));  //получили ай ди юзера на котрого клацнули
  //   this.activatedRoute.params
  //   .subscribe(paramss => userService.getSingleUser(paramss.id)
//   .subscribe(value => this.user = value));
  // }


  constructor(
    private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router
  ) {

    activatedRoute.params.subscribe(value => {

      this.user = history.state.user;
    });


  }

  ShowPostsThisUser(id: number): void {
    this.postService.getPostOfUser(id).subscribe(value => this.postOfUser = value);
  }

  ShowCommentsToPostId(PostId: number, UserId: number): void {
    this.router.navigate(['posts', PostId, 'comments']);



  }

// toUserDetail(use: User): void {
//   this.router.navigate(['users', use.id], {state: {user: use}});
// }
}
