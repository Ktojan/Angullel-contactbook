import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  hideContactForm = true;  // *todo перенести в main-component, когда получится передавать свойства из side-comp

  ngOnInit() {
  }


}
