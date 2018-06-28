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
  }

  ngOnInit() {  }

    filterContacts (inputValue) {
        this.filterName = inputValue;
        this.searchContactsService.getFilteredContacts(inputValue);
    }
}
