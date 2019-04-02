import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../shared/contacts.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
    actualContact: Object;
    loaded = false;

    constructor(private contactsService: ContactsService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.contactsService.getOneContact(id)
            .subscribe(obj => {
                this.actualContact = obj;
                this.loaded = true;
                console.dir(this.actualContact);
        });
    }
}
