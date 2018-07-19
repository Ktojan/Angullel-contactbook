import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../shared/categories.service';
import {ContactsService} from '../shared/contacts.service';
import { catchError, map, tap, take } from 'rxjs/operators';


@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    categories;
    contacts: Object[];
    contactsWithAge: Object[];
    showCategories = true;
    showBdays = false;

    constructor(private categoriesService: CategoriesService,
                private contactsService: ContactsService) {
    }

    ngOnInit() {

         this.categoriesService.getCategories()
             .pipe(
                 take(3),
                 tap(cont => console.log(cont))
                  /*tap(h => {
                     const outcome = h ? `fetched` : `did not find`;
                     this.log(`${outcome} hero id=${id}`);
                 }),
                 catchError(this.handleError<Hero>(`getHero id=${id}`))*/
             )
             .subscribe(data => this.categories = data);
    }

    toggleView(item) {
        this[item] = !this[item];
    }
}
