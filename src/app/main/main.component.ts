import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  hideContactsGrid = false;
  hideContactViewForm = true;
  hideContactForm = true;
  actualContact: string;

  constructor() { }

  ngOnInit() {
  }

  showFull(event) {
    console.log(event.target.innerHTML);
   this.actualContact = event.target.innerHTML;
  }

  toggleContactsGrid() {
    this.hideContactsGrid = !this.hideContactsGrid;
  }
  showContactViewForm() {
    if (this.hideContactViewForm) this.hideContactViewForm = false;
  }
  toggleContactForm() {
    this.hideContactForm = !this.hideContactForm;
  }
}
