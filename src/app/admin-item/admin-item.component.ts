import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: []
})
export class AdminItemComponent implements OnInit {

    title = 'default';
    users: string[];
    user: string;
    userId: number;
    length: number;

    constructor(private userService: UserService,
                private router: Router,
                private aRoute: ActivatedRoute) {}

    ngOnInit() {
        this.aRoute.params.forEach(val => {
            this.users = this.userService.getUsernames();
            this.length = this.users.length;
            let {id}= val;
            this.title = this.aRoute.snapshot.data['title'];
            this.userId = +id;
            this.user = this.users[id];
        });
  }

}
