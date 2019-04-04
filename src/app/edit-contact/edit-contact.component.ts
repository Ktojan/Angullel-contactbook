import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';


@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
    actualContact: Object;
    model: Object;  // an object for data from the Form
    loaded = false;
    phoneCategories = ["mobile", "work", "home"];

    constructor(private contactsService: ContactsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.contactsService.getOneContact(id)
            .subscribe(obj => {
                this.actualContact = obj;
                this.model = obj;
                this.loaded = true;                
        });
    }

    onSubmit() {
        console.table(this.model);
        this.contactsService.postContact(this.model)
    }

    delete() {
        alert('All contacts have been deleted permanently!');
    }
}
