import {Injectable} from '@angular/core';
import {CategoriesService} from './categories.service';
import {CONTACTS} from './contacts.data';


@Injectable()
export class ContactsService {

    constructor() { }

    getContacts() {  // got from here: https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
        let contFromLocStor = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        while (i--) {
            let contact = localStorage.getItem(keys[i]);
            contFromLocStor.push(JSON.parse(contact));
        }
        return contFromLocStor;
    }

    getContactsByCategory(category) {
        return CONTACTS.filter(item => item['categories'].includes(category));
    }

}
