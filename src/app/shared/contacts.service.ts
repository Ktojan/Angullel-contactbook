import {Injectable} from '@angular/core';
import {CategoriesService} from './categories.service';
import { CONTACTS } from './contacts.data';


@Injectable()
export class ContactsService {
    categories = [];

    constructor(private categoriesService: CategoriesService) {
        this.categories = this.categoriesService.getCategories();
        this.addCategoryByDescription();
    }

    getContacts() {
        return CONTACTS;
    }

    getContactsByCategory(category) {
        return CONTACTS.filter(item => item['categories'].includes(category));
    }

    addCategoryByDescription() {
        CONTACTS.forEach((item) => {
            let cat = [];
            if (item['categories'].length === 0) {
                switch (item['desc']) {
                    case 'uncle':
                    case 'sister': {
                        cat.push(this.categories[0]);
                        break;
                    }
                    case 'friend': {
                        cat.push(this.categories[1]);
                        break;
                    }
                    case 'work':
                    case 'boss':
                    case 'coworker':
                    case 'job': {
                        cat.push(this.categories[2]);
                        break;
                    }
                };
                item['categories'] = cat;
            }
        });
    }
}
