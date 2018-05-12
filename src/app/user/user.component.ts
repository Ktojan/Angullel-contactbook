import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('number') title: string;

  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  alert() {
  alert('click');
  this.click.emit();
  }
}