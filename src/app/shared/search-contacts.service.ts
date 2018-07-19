import {Injectable} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';

@Injectable()
export class SearchContactsService {
    contacts =[];
    filteredContacts =[];
    filterForContacts;
    updateSubscribers =[]; // агрегатор функций, которые по идее запускают обновление в каждом из компонентов

    constructor(private contactsService: ContactsService) {
       // this.contacts = this.contactsService.getContacts();
        this.filteredContacts = this.contacts;
    }

    getFilteredContacts(filter) {
        filter = filter.toLocaleLowerCase();
        this.filterForContacts = filter;
        console.log(filter);
        this.filteredContacts = (filter!=='') ? this.contacts.filter(contact => contact['surname'].toLocaleLowerCase().includes(filter))
            : this.contacts;
        console.log(this.filteredContacts);
        this.updateSubscribers.forEach(func => func());
    }
}
