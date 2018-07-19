import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable()
export class CategoriesService {

    CATEGORIES =[];

    constructor(private http: HttpClient) {
    }

    getCategories() {

        return this.http.get('http://194.87.232.68:8081/api/categories?')
            .pipe(
                map(catArr => {
                    for (let s=0; s < 3; s++) this.CATEGORIES.push(catArr[s]['name']);
                    return this.CATEGORIES;
                })
               // catchError(error => console.log(error))
            );
    }
}
