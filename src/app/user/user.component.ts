import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
    withCredentials: true
}

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent implements OnInit {
    user;

    constructor(private http: HttpClient,
                private userService: UserService,
                private auth: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.user = this.userService.loggedUser;
        /*const searchInput = document.getElementById('searchInput') as HTMLInputElement;
         this.user = Observable.fromEvent(searchInput, 'click')
         .subscribe((e: KeyboardEvent) => {
         if (e.keyCode === ESC_KEY) {
         console.log(e);
         }
         });*/
        /* this.userService.loggedUser = new Observable((value) => {})
         this.user = this.userService.loggedUser.subcribe((value) => {});*/
    }


    doLogin() {
        let url  = 'http://194.87.232.68:8081/api/users/login',
            data = {"email":"karpovich.andrey@gmail.com","password":"kilo"};
        return this.http.post(url, data, httpOptions)
            .subscribe();
    }

    doLogout() {
        if (confirm('Are you sure you want to log out?')) this.auth.isAutorized = false;
        this.router.navigate(['contacts']);
    }
}
