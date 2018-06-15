import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
      const src = new Observable( function(observer) {
          let h =5;
          setInterval(() => {
              h++;
              observer.next(h);
          }, h*100);
      });

      src
          .take(17)
          .subscribe(value => {
          console.log(value);
      });
  }
}
