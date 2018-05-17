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


    showFull(event) {
       /* let selected;
        this.contacts.forEach(function (item) {
            if (item['surname'] === event.target.innerHTML) {
                selected = item;
                return
            }  // проблема с контекстом при попытке передать здесь this.actualContact = item
        });
        this.actualContact = selected;*/
    }


}
