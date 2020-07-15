import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  user: User;
  // constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  //   // this.activatedRoute.params.subscribe(paramss => console.log(paramss));  //получили ай ди юзера на котрого клацнули
  //   this.activatedRoute.params.subscribe(paramss => userService.getSingleUser(paramss.id).subscribe(value => this.user = value));
  // }

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(history.state);
    activatedRoute.params.subscribe(value => {
      console.log(value);
      console.log('value');
      this.user = history.state.user;
    });


  }

}
