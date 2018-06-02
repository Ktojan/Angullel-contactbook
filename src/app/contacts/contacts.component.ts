import {Component, OnInit, OnChanges} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../shared/categories.service';
import {SearchContactsService} from '../shared/search-contacts.service';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts = [];
    filteredContacts: Object[];
    filterForContacts: string;
    categoryContacts = [];
    categories = [];
    user: string;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private categoriesService: CategoriesService,
                private searchContactsService: SearchContactsService,
                private activatedRoute: ActivatedRoute) {
        this.filterForContacts = this.searchContactsService.filterForContacts;
        this.contacts = this.contactsService.getContacts();
    }

    ngOnInit() {
        var self = this;
        this.categories = this.categoriesService.getCategories();
        this.user = this.userService.getUsername();
        this.filterContactsByCategory(this.activatedRoute.snapshot.params['id']);
        this.filteredContacts = this.searchContactsService.getFilteredContacts();
        console.log('this.filteredContacts'); console.log(this.filteredContacts);
    }

    ngOnChanges(changes: any) {
        this.filteredContacts = this.searchContactsService.getFilteredContacts();
        console.log('ngOnChanges');
        console.log(this.filteredContacts);
    }

   /* doFilter (contacts: Object[], value: string) {
        value = value.toLocaleLowerCase();
        return contacts.filter((contact: Object) =>
        contact['surname'].toLocaleLowerCase().indexOf(value) !== -1);
    }*/

    filterContactsByCategory(category): void {
        const self = this;
        if (category === undefined) {
            self.categoryContacts = self.contacts;
        } else {
            this.contacts.forEach(function (item) {
                if (item['categories'].indexOf(category) != -1)   // если выбранная категория есть в массиве категорий контакта
                    self.categoryContacts.push(item);
            })
        }
    }


    addToCategory(contact, category) {
        contact['categories'].push(category);
        alert('Successfully added to category ' + category);
    }

}
