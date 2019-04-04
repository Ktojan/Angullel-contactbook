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
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts;
    filteredContacts: any;
    categoryContacts;
    category;
    user: string;
    M55 = M55;
    M501 = M501;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private categoriesService: CategoriesService,
                private searchContactsService: SearchContactsService,
                private http: HttpClient,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        let catFromUrl = this.activatedRoute.snapshot.params['id'],
            me = this;
       this.categoriesService.getCategoryId(catFromUrl) // получение айди категории по имени
           .subscribe(resp => {
               me.contactsService.getContacts(resp)
                   .subscribe(obj => {
                       me.filteredContacts = obj;
                   });
           });

        this.category = this.categoriesService.getCategories();
        this.user = this.userService.getUsername();
        /*this.searchContactsService.updateSubscribers.push(this.updateFilteredCont.bind(this));
        this.searchContactsService.updateSubscribers.push(this.filterContactsByCategory.bind(this));*/ //!*****************
        //this.updateFilteredCont();
    }

    updateFilteredCont() {
        this.filteredContacts = this.searchContactsService.filteredContacts;
    }

   /* filterContactsByCategory(category) {
        if (!category) {
            this.categoryContacts = this.contacts;
        } else {
            this.categoryContacts = this.contactsService.getContactsByCategory(category);
        }
    }*/

    deleteContact(contact) {
        let headers =  new HttpHeaders();
        headers.append("Content-Type", "multipart/form-data");
        headers.append("withCredentials", "true");
        let id = contact['_id'],
            url = 'http://194.87.232.68:8081/api/phonebook/' + id;
        return this.http.delete(url, {headers: headers}).subscribe();
    }

    addToCategory(contact, category) {
        contact['category'].push(category); //*todo
        alert('Successfully added to category ' + category);
    }
}
