import { Component, OnInit, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import {ContactsService} from './shared/contacts.service';
import { CONTACTS } from './shared/contacts.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    /*@ViewChild('searchButton') searchButton: ElementRef;*/
    //@ViewChild ('searchInput') searchInput: ElementRef;


  ngOnInit() {

      let locStor = window.localStorage;
      CONTACTS.forEach(contact => {
          let sItem = JSON.stringify(contact);
          locStor.setItem(contact.surname,sItem);
      });
      console.log(locStor);

// Create a new Observable that will deliver the above sequence
    /*  const sequence = new Observable(sequenceSubscriber);

      sequence.subscribe({
          next(num) { console.log('1st subscribe: ' + num); },
          complete() { console.log('1st sequence finished.'); }
      });

// After 1/2 second, subscribe again.
      setTimeout(() => {
          sequence.subscribe({
              next(num) { console.log('2nd subscribe: ' + num); },
              complete() { console.log('2nd sequence finished.'); }
          });
      }, 1000);*!/


      /!*this.myObservable = Observable.of(1, 2, 7);

      const myObserver = {
          next: x => this.myObservableOut + '  ' + x,
          error: err => console.error('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification'),
      };

      this.myObservable.subscribe(myObserver);*!/



        /!*const stream = Observable.from([17,5,4,-8,12,0,-19,108]);
      stream.pipe(
          filter(item => item%2===0)
      ).subscribe(value => console.log(value));*!/

      /!*const src = new Observable( observer => {
          let h = 1;
          var int = setInterval(() => {
              if (h === 8) {
                  observer.error(h)
              };
              if (h === 7) {
                  observer.complete(h)
              };
              observer.next(h);
              h++;
          }, h*1000);

      });

      src
          .subscribe(value => {
             console.log(value);
            }, (count) => {
             console.log('error func, step: ', count)
            }, (count) => {
             console.log('complete func, step: ', count)
            });*!/!*!/*/
  }
}
