import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CommentService} from './comment.service';
import {ObserveOnMessage} from 'rxjs/internal/operators/observeOn';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<Comment[]> {

  constructor(private commentService: CommentService) {
  }

  resolve(x): Observable<Comment[]> {
    console.log('x');
    console.log(x);
    return this.commentService.getCommentsOfPost(x.params.id);
  }
}
