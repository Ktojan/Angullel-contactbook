import {Injectable} from '@angular/core';
import {CategoriesService} from './categories.service';
import {CONTACTS} from './contacts.data';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
    withCredentials: true
}

@Injectable()
export class ContactsService {

    contacts = [];

    constructor(private http: HttpClient,
                private activatedRoute: ActivatedRoute) {
        CONTACTS.forEach(contact => {
            let sItem = JSON.stringify(contact);
            localStorage.setItem(contact.surname, sItem);
        });
    }

    getContacts(catId) {
        console.log(catId);
        let url = catId ? 'http://phonebook.hillel.it/api/phonebook?category=' + catId : 'http://phonebook.hillel.it/api/phonebook';
        this.contacts = [];
        return this.http.get(url, {withCredentials: true})
            .pipe(
                map(contArray => {
                    let s = 0;
                    while (contArray[s]) {
                        this.contacts.push(contArray[s]);
                        s++;
                    }
                    console.log(this.contacts);
                    return this.contacts;
                })
            )
            //.subscribe()
    }

    getOneContact(id) {
        return this.http.get('http://phonebook.hillel.it/api/phonebook/' + id,
            {withCredentials: true})
    }


    postContact(formData) {
        let url = 'http://phonebook.hillel.it/api/phonebook',
            jsonData = JSON.stringify(formData);
        console.log(jsonData);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let id = JSON.parse(xhr.responseText)['id'];
                this.editContact(id, formData);
            }
            ;
        };
        xhr.send('{}');
    }

    editContact(id, formData) {
        let url = 'http://phonebook.hillel.it/api/phonebook/' + id,
            data = `{}`;
        console.log(url);

        /* this.http.put(url, JSON.stringify(data), {withCredentials: true, ContentType: 'application/json'}
         ).subscribe(function(data){
         console.log(data)
         });*/

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(JSON.stringify(data));
    }

    getContactsByCategory(category) {
        return CONTACTS.filter(item => item['category'].includes(category));
    }

}
