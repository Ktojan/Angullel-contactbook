import {Component, OnInit} from '@angular/core';
import { CONTACTS } from '../shared/contacts.data';
import { Contact }    from '../contact';
import {CategoriesService} from '../shared/categories.service';
import { Router} from '@angular/router';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    model = new Contact('Богатырь', 'номер 1', '... в команду Черномора');
    categories;

    constructor(private router: Router,
                private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        console.log(this.categories);
    }

    onSubmit() {
        console.log(this.model);
        alert("New contact " + this.model.surname + " was created!");
        this.router.navigate(['/contacts']);
        CONTACTS.push(this.model);
    }
}
