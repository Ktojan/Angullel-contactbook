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
      this.grabActualContact(this.activatedRoute.snapshot.params['id']);
      console.log(this.actualContact);
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
