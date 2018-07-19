/*todo GLOBAL
 переделать все стили на scss
 кнопка переключения режимов мобайл-обычный
 разбивка на модули
 из Контактс выделить отдельный модуль и комп контакт
 whatruns дополнение для хрома
 */

import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoriesService} from '../shared/categories.service';
import {SearchContactsService} from '../shared/search-contacts.service';
import {M55, M501} from '../constants';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts;
    filteredContacts: any;
    categoryContacts;
    categories;
    user: string;
    M55 = M55;
    M501 = M501;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private categoriesService: CategoriesService,
                private searchContactsService: SearchContactsService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
         this.contactsService.getContacts()
            .subscribe(obj => {
                this.filteredContacts = obj; console.log(this.filteredContacts);
            });
        this.categories = this.categoriesService.getCategories();
        this.user = this.userService.getUsername();
        /*this.searchContactsService.updateSubscribers.push(this.updateFilteredCont.bind(this));
        this.searchContactsService.updateSubscribers.push(this.filterContactsByCategory.bind(this)); //!*****************
        this.filterContactsByCategory(this.activatedRoute.snapshot.params['id']);
        this.updateFilteredCont();*/
    }

    updateFilteredCont() {
        this.filteredContacts = this.searchContactsService.filteredContacts;
        //  console.log('ContactsComponent'); console.log(this.filteredContacts);
    }

    filterContactsByCategory(category) {
        if (!category) {
            this.categoryContacts = this.contacts;
        } else {
           // this.categoryContacts = this.contactsService.getContactsByCategory(category);
        }
    }

    addToCategory(contact, category) {
        contact['categories'].push(category); //*todo
        alert('Successfully added to category ' + category);
    }
}
