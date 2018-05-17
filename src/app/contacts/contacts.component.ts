import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    contacts: Object[];
    categoryContacts = [];
    user: string;

    constructor(private contactsService: ContactsService,
                private userService: UserService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
        this.user = this.userService.getUsername();
        this.filterContactsByCategory(this.activatedRoute.snapshot.params['id']);
    }

    filterContactsByCategory(category): void {
        const self = this;
        this.categoryContacts = [];
        if (category === undefined) {
            self.categoryContacts = self.contacts;
        } else {
            let catVariants = [];
            switch (category) {
                case 'Family': {
                    catVariants = ['family', 'brother', 'sister', 'son', 'daughter', 'mother', 'father', 'uncle', 'tunt'];
                    break;
                }
                case 'Friends': {
                    catVariants = ['Friend', 'friend', 'Mate', 'mate'];
                    break;
                }
                case 'Work': {
                    catVariants = ['Work', 'work', 'Job', 'job', 'coworker'];
                    break;
                }
            };
            this.selectCatContacts(catVariants);
        }
    }

    selectCatContacts(catVariants) {
        const self = this;
        this.contacts.forEach(function (item) {
            catVariants.forEach(function (variant) {
                if (item['desc'].indexOf(variant) !== -1) {  // например в 'sister-in-law' содержится 'sister'
                    if (self.categoryContacts.indexOf(item) === -1) // проверка, что этот элемент не был добавлен
                        self.categoryContacts.push(item);
                }
            })
        });
    }
}
