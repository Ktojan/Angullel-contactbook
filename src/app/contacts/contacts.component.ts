import {Component, OnInit, OnChanges} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {CategoriesService} from '../shared/categories.service';
import {SearchContactsService} from '../shared/search-contacts.service';

import {Observable} from 'rxjs';

import {filter, map} from 'rxjs/operators';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts = [];
    filteredContacts: any;
    categoryContacts = [];
    categories = [];
    user: string;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private categoriesService: CategoriesService,
                private searchContactsService: SearchContactsService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.contacts = this.contactsService.getContacts();
        this.filteredContacts = this.contacts;

    }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        this.user = this.userService.getUsername();
       this.searchContactsService.updateSubscribers.push(this.updateFilteredCont.bind(this));
       // this.searchContactsService.updateSubscribers.push(this.filterContactsByCategory.bind(this)); //*****************
        this.filterContactsByCategory(this.activatedRoute.snapshot.params['id']);
        this.updateFilteredCont();

        const ESC_KEY = 27;
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        console.log(searchInput);
        const subscription = Observable.fromEvent(searchInput, 'click')
            .subscribe((e: KeyboardEvent) => {
                if (e.keyCode === ESC_KEY) {
                    console.log(e);
                }
            });

        /*const stream = Observable.from(this.filteredContacts);
        console.log(stream);
        stream.pipe(
            //filter(item => item.includes(3)),
            //map(item => 'товарищ ' + item.surname)
        ).subscribe(value => console.log(value));*/
        
    }

    updateFilteredCont() {
       this.filteredContacts = this.searchContactsService.filteredContacts;
       // console.log('ContactsComponent'); console.log(this.filteredContacts);
    }

    filterContactsByCategory(category) {
        if (!category) {
            this.categoryContacts = this.contacts;
        } else {
            this.categoryContacts = this.contactsService.getContactsByCategory(category);
        }
    }


    addToCategory(contact, category) {
        contact['categories'].push(category);
        alert('Successfully added to category ' + category);
    }

}
