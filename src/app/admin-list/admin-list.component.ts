import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

    users: string[];
    title: string;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUsernames();
    }

}
