import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsOfPost(postId): Observable <Comment[]>{
   return  this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
