import {Component, OnInit} from '@angular/core';
import { CONTACTS } from '../shared/contacts.data';
import { rezervCONTACTS} from '../shared/contacts.data';
import { Contact }    from '../contact';
import {CategoriesService} from '../shared/categories.service';
import { Router} from '@angular/router';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    model: Contact;
    categories;

    constructor(private router: Router,
                private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        this.model = rezervCONTACTS[0];  //несколько заготовок, данные из которых подставляются в инпуты при создании нового контакта
    }

    onSubmit() {
        alert("New contact " + this.model.surname + " was created!");
        let lStor = window.localStorage;
        let strModel = JSON.stringify(this.model);
        lStor.setItem(this.model.surname,strModel);
        let newUser = JSON.parse(lStor.getItem('first'));
        if (rezervCONTACTS.length !== 0) rezervCONTACTS.shift();
        this.router.navigate(['/contacts']);
    }
}
