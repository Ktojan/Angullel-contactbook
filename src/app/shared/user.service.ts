import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    loggedUser = 'karpovich.andrey';

    getUsername() {
        return this.loggedUser;
    }

    getUsernames() {
        return USERNAMES;
    }
}

const USERNAMES = ['Mishka Hevery', 'Filipe Silva', 'Igor Minar', 'Naomi Black', 'Elana Olson', 'Matias Niemela'];