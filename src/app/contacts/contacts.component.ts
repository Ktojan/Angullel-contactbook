import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../shared/categories.service';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts: Object[];
    categoryContacts = [];
    categories = [];
    user: string;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private categoriesService: CategoriesService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
        this.categories = this.categoriesService.getCategories();
        this.user = this.userService.getUsername();
        this.filterContactsByCategory(this.activatedRoute.snapshot.params['id']);
    }

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

    /*    selectCatContacts(catVariants) {
     const self = this;
     this.contacts.forEach(function (item) {
     catVariants.forEach(function (variant) {
     if (item['desc'].indexOf(variant) !== -1) {  // например в 'sister-in-law' содержится 'sister'
     if (self.categoryContacts.indexOf(item) === -1) // проверка, что этот элемент не был добавлен
     self.categoryContacts.push(item);
     }
     })
     });
     }*/

    addToCategory(contact, category) {
        contact['categories'].push(category);
        alert('Successfully added to category ' + category);
    }

}
