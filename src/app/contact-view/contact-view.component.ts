import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  @Input() actualContact: string;

  constructor() { }

  ngOnInit() {
  }

}
