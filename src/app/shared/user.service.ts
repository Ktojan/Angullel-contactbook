import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    loggedUser = 'Some guy';

    getUsername() {
        return this.loggedUser;
    }

    getUsernames() {
        return USERNAMES;
    }
}

const USERNAMES = ['Mishka Hevery', 'Filipe Silva', 'Igor Minar', 'Naomi Black', 'Elana Olson', 'Matias Niemela'];