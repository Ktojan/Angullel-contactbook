import {Component, OnInit} from '@angular/core';
import { CONTACTS } from '../shared/contacts.data';
import { rezervCONTACTS} from '../shared/contacts.data';
import { Contact }    from '../contact';
import { ContactsService } from '../shared/contacts.service';
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
                private contactsService: ContactsService,
                private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        this.model = rezervCONTACTS[0];  //несколько заготовок, данные из которых подставляются в инпуты при создании нового контакта
    }

    onSubmit() {
        this.contactsService.postContact(this.model)
           // .subscribe(obj => console.log(obj))
        /*let strModel = JSON.stringify(this.model);
        lStor.setItem(this.model.surname,strModel);*/
        //this.router.navigate(['/contacts']);
    }

    getImage(image: string) {
        const nameStart = image.lastIndexOf('\\');
        image = image.slice(nameStart+1);
        console.log(image);
        this.model['image'] = image;
        /*var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://194.87.232.68:8081/api/files/' + image, true);
        xhr.withCredentials = true;
        xhr.send();*/
    }
}
