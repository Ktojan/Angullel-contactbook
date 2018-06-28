import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './shared/contacts.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
      CONTACTS.forEach(contact => {
          let sItem = JSON.stringify(contact);
          localStorage.setItem(contact.surname,sItem);
      });
  }
}
