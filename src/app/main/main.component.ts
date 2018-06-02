import {Component, OnInit} from '@angular/core';
import { ContactsService } from '../shared/contacts.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    contacts: Object[];

    constructor(private contactsService: ContactsService) { }

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
    }
}
