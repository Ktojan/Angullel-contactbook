import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  showContactForm() {
    console.log('showContactForm emitted by Create click');
  }
}
