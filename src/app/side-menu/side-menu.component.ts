import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { ContactsService } from '../shared/contacts.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    categories: string[];
    contacts: Object[];
    contactsWithAge: Object[];

    showCategories = true;
    showBdays = false;

  constructor(private categoriesService:CategoriesService,
              private contactsService:ContactsService) { }

  ngOnInit() {
      this.categories = this.categoriesService.getCategories();
      this.contacts = this.contactsService.getContacts();
      this.contacts.forEach(function(item) {
          if (item['birthday']) item['age'] = 2018 - item['birthday'].slice(-4)});  // *todo сделать реальный расчет возраста
      this.contactsWithAge = this.contacts.filter(c => c['birthday']);
  }

    toggleView(item) {
        this[item] = !this[item];
    }
}
