import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    url: string;
    isAutorized = false;

  constructor() { }

    login(username, pass) {
        if (username === 'karpovich.andrey' && pass === '***') {
            this.isAutorized = true;
            return true;
        }
    }
}
