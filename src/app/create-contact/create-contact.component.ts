import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  @Output() showCForm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    alert('Create contact clicked');
    this.showCForm.emit();
  }
}
