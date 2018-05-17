import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

CATEGORIES = ['All Contacts' , 'Family', 'Friends', 'Work'];

    getCategories() {
        return this.CATEGORIES;
    }
}
