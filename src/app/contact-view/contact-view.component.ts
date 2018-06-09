import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
    contacts;
    actualContact: Object;

    constructor(private contactsService: ContactsService,
                private activatedRoute:ActivatedRoute) {
    }

  ngOnInit() {
      this.contacts = this.contactsService.getContacts();
      const id = this.activatedRoute.snapshot.params['id'];
      this.grabActualContact(id);
  }

  grabActualContact(surname) {
      this.contacts.forEach((item) => {
          if (item['surname'] === surname) {
              this.actualContact = item;
          }
      });
  }
}
