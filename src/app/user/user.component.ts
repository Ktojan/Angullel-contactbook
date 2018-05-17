import { Component, OnInit} from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    user: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.user = this.userService.getUsername();
      console.log(this.user);
  }


}
