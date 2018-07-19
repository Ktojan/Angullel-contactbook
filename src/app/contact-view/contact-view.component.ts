import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
    actualContact: Object;

    constructor(private contactsService: ContactsService,
                private activatedRoute:ActivatedRoute) {
    }

  ngOnInit() {
      const id = this.activatedRoute.snapshot.params['id'];
      this.contactsService.getOneContact(id)
          .subscribe(obj => this.actualContact = obj);
      console.log(this.actualContact);
  }
}
