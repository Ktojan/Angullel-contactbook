import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable()
export class CategoriesService {

    CATEGORIES = [];

    constructor(private http: HttpClient) {
    }

    getCategories() {
        this.CATEGORIES = [];
        return this.http.get('http://phonebook.hillel.it/api/categories?')
            .pipe(
                map(catArr => {
                    for (let s = 0; s < 3; s++) this.CATEGORIES.push(catArr[s]['name']);
                    return this.CATEGORIES;
                })
                // catchError(error => console.log(error))
            );
    }

    getCategoryId(catName) {
        return this.http.get('http://phonebook.hillel.it/api/categories?')
            .pipe(
                map(catArr => {
                    if (catName) {
                        for (let s = 0; s < 3; s++) { //catArr.length
                            if (catArr[s]['name'] === catName)
                            return catArr[s]['_id'];
                        }
                    } else {
                        return ''
                    }
                })
            )

    }
}
