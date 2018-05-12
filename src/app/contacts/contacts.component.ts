import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Object[] = [
    {name: 'Bogatyrev Yuriy', desc: 'friend', url: '../../assets/img/bogatyrev.jpg'},
    {name: 'Rachel Weis', desc: 'coworker', url: '../../assets/img/weis.jpg'},
    {name: 'Jeremy Irons', desc: 'uncle', url: '../../assets/img/irons.jpg'},
    {name: 'Chulpan Hamatova', desc: 'cousine', url: '../../assets/img/hamatova.jpg'},
    {name: 'Kevin Costner', desc: 'coworker', url: '../../assets/img/kostner.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
