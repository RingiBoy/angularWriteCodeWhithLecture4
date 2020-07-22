import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})

export class CommentsOfPostComponent {
  comment: Comment[];


  constructor(private serviceCom: CommentService, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log('constructor');
    this.activatedRoute.data.subscribe(console.log);

    // this.activatedRoute.params
    //   .subscribe(paramData => {
    //       console.log(paramData);
    //       this.activatedRoute.data.subscribe(value => console.log(value))
    //     //   serviceCom.getCommentsOfPost(paramData.id)
    //     //     .subscribe(value => console.log(value));
    //     }
    //   );
  }
}

// serviceCom.getCommentsOfPost(5).subscribe(value => {
//   this.comment = value;
//   console.log('history.state');
//   console.log(history.state);
//   console.log('value');
//   console.log(value);


//   }
//
//
// }
