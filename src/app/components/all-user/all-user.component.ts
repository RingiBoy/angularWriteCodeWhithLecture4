import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

  users: User[];

  // constructor(private userServ: UserService, private router: Router) {
  //   userServ.getAllUsers().subscribe(value => this.users = value);
  // }
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.xxx);
  }


  toUserDetail(use: User): void {
  this.router.navigate(['users', use.id], {state: {user: use}});
  }
}
