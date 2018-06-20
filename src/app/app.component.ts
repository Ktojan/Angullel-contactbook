import { Component, OnInit, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import {ContactsService} from './shared/contacts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    /*@ViewChild('searchButton') searchButton: ElementRef;*/
    //@ViewChild ('searchInput') searchInput: ElementRef;


  ngOnInit() {

      /*function sequenceSubscriber(observer) {

       /!*   let timeoutId;
          // Will run through an array of numbers, emitting one value
          // per second until it gets to the end of the array.
          function doSequence(arr, idx) {
              timeoutId = setTimeout(() => {
                  observer.next(arr[idx]);
                  if (idx === arr.length - 1) {
                      observer.complete();
                  } else {
                      doSequence(arr, ++idx);
                  }
              }, 2000);
          }
          doSequence(['K', 'r', 'a', 'k' , 'o', 'w'], 0);

          // Unsubscribe should clear the timeout to stop execution
          return {unsubscribe() {
              clearTimeout(timeoutId);
          }};
      }

// Create a new Observable that will deliver the above sequence
      const sequence = new Observable(sequenceSubscriber);

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
            });*!/*/
  }
}
