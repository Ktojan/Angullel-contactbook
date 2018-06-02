import { Component, OnInit, Output } from '@angular/core';
import {SearchContactsService} from '../shared/search-contacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

    filterName: string = '';

  constructor(private searchContactsService: SearchContactsService) {
      //this.searchContactsService.filterForContacts = this.filterName;
      console.log(this.searchContactsService.getFilteredContacts());
  }

  ngOnInit() {  }

    filterContacts (inputValue) {
        this.filterName = inputValue;
       // this.searchContactsService.filterForContacts(this.filterName); // почему не пашет?
        console.log(this.searchContactsService._filterForContacts);
        this.searchContactsService.filterForContacts = this.filterName;
    }
}
