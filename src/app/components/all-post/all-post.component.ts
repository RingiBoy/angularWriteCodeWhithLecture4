import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {
  posts: Post[];

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) {
    postService.getAllPost().subscribe(allPost => {
      this.posts = allPost;


    });
  }

}
