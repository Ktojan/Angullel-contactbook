import {Injectable} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';

@Injectable()
export class SearchContactsService {
    contacts = [];
    filteredContacts: Object[];
    _filterForContacts: string;

    get filterForContacts() {
        return this._filterForContacts;
    }

    set filterForContacts(value: string) {
        this._filterForContacts = value;
        this.filteredContacts = this.filterForContacts ? this.doFilter(this.contacts, this.filterForContacts) : this.contacts;
       console.log(this.filteredContacts);
    }

    constructor(private contactsService: ContactsService) {
        this.contacts = this.contactsService.getContacts();
        this.filteredContacts = this.contacts;
       // this.filterForContacts = '';
    }

    getFilteredContacts() {
        console.log( this._filterForContacts);
        return this.filteredContacts;
    }

    doFilter(contacts: Object[], filter: string) {
        filter = filter.toLocaleLowerCase();
        return contacts.filter((contact: Object) =>
        contact['surname'].toLocaleLowerCase().indexOf(filter) !== -1);
    }
}