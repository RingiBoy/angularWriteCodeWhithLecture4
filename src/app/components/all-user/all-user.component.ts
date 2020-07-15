import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: User[];

  constructor(private userServ: UserService) {
    userServ.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
