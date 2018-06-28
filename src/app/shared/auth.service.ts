import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    url: string;
    isAutorized = false;

  constructor() { }

    login(username, pass) {
        if (username === 'Some guy' && pass === 'p') {
            this.isAutorized = true;
            return true;
        }
    }
}
