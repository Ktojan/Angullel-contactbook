import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    formHide = false;

    constructor(private auth: AuthService,
                private userService: UserService,
                private router: Router) {
    }

    doLogin(username, password) {
        let loginSuccess = this.auth.login(username, password);
        loginSuccess ? this.router.navigate([this.auth.url]): alert('right password is p');
        this.userService.loggedUser = username;
        if (this.auth.isAutorized) this.formHide = true;
    }
}
