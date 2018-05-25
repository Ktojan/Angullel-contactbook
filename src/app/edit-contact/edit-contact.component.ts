import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
    contacts = [];
    actualContact: Object;

    constructor(private contactsService: ContactsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
       this.contacts = this.contactsService.getContacts();
       this.grabActualContact(this.activatedRoute.snapshot.params['id']);
    }

    grabActualContact(surname) {
        let self = this;
        this.contacts.forEach(function (item) {
            if (item['surname'] === surname) {
                self.actualContact = item;
                return;
            }
        });
    }
}
