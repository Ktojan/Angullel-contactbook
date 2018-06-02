import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-page-not-found',
    template: `
    <div>
    <h2 class="errorMessage">Seems like a tiny error with navigation...</h2>
    <img src='../../assets/img/landing-crash.gif'>
    <br><br><br>
    <button style="font-size: 29px"
            (click)="goBack()">OH SHIT, LET'S GO BACK!</button>
    </div>
  `,
    styles: [`
    .errorMessage { 
      margin-top:60px; 
      font-size: 50px;
      text-align: center; 
    }
    div {
        align-content: center;
    }`]
})
export class PageNotFoundComponent {

    constructor(private location: Location) {
    }

    goBack(): void {
        this.location.back();
    }
}

