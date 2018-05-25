import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

CATEGORIES = ['Family', 'Friends', 'Work'];

    getCategories() {
        return this.CATEGORIES;
    }
}
