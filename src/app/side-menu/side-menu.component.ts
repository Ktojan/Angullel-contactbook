import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../shared/categories.service';
import {ContactsService} from '../shared/contacts.service';
import {map, tap, take } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


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
                private http: HttpClient) {
    }

    ngOnInit() {

         this.categoriesService.getCategories()
             .pipe(
                 take(3)
             )
             .subscribe(data => this.categories = data);
    }

    byCategory(category) {

            this.contacts = [];
            let getCont = this.http.get('http://194.87.232.68:8081/api/phonebook?category=5ad52c0fde20ab200b82133c', {withCredentials: true})
                .pipe(
                    map(contArray => {
                        let w = 0;
                        while (contArray[w]) {
                            this.contacts.push(contArray[w]);
                            w++;
                        }
                       // return this.contacts;
                    })
                );
            getCont.subscribe();
    }

    toggleView(item) {
        this[item] = !this[item];
    }
}
