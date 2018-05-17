import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    getUsername()
    {
        return USERNAME;
    }
  constructor() { }
}

let USERNAME = 'Mishka Hevery';