import {Injectable} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';

@Injectable()
export class SearchContactsService {
    contacts =[];
    filteredContacts =[];
    filterForContacts;
    updateSubscribers =[]; // агрегатор функций, которые по идее запускают обновление в каждом из компонентов

    constructor(private contactsService: ContactsService) {
        this.contacts = this.contactsService.getContacts();
        this.filteredContacts = this.contacts;
       // console.log(this.filteredContacts);
    }

    getFilteredContacts(filter) {
        filter = filter.toLocaleLowerCase();
        this.filterForContacts = filter;
        this.filteredContacts = (filter!=='') ? this.contacts.filter(contact => contact['surname'].toLocaleLowerCase().includes(filter))
            : this.contacts;
        this.updateSubscribers.forEach(func => func());
    }
}
