import {Injectable} from '@angular/core';
import {CategoriesService} from './categories.service';
import {CONTACTS} from './contacts.data';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
    withCredentials: true
}

@Injectable()
export class ContactsService {

    contacts = [];

    constructor(private http: HttpClient) {
        CONTACTS.forEach(contact => {
            let sItem = JSON.stringify(contact);
            localStorage.setItem(contact.surname, sItem);
        });
    }

    getContacts() {
        this.contacts = [];
        return this.http.get('http://194.87.232.68:8081/api/phonebook', {withCredentials: true})
         .pipe(
             map(catArr => {
                 let s = 0;
                 while (catArr[s]) {
                     this.contacts.push(catArr[s]);
                     s++;
                 }
                 return this.contacts;
             })
         );
    }

    getOneContact(id) {
        return this.http.get('http://194.87.232.68:8081/api/phonebook/' + id,
            {withCredentials: true})
    }


    postContact(formData) {
        let url  = 'http://194.87.232.68:8081/api/phonebook',
            jsonData = JSON.stringify(formData);
        console.log(jsonData);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
       // xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                let id = JSON.parse(xhr.responseText)['id'];
                 this.editContact(id, formData);
            };
        };
        xhr.send('{}');
    }

    editContact(id, formData) {
        let url  = 'http://194.87.232.68:8081/api/phonebook/' + id,
            data = `{}`;
        console.log(url);

        this.http.put(url, JSON.stringify(data), {withCredentials: true}
        ).subscribe(function(data){
            console.log(data)
        });

        /*const xhr = new XMLHttpRequest();
        xhr.open('PUT', url, true);
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.send(JSON.stringify(data));*/
    }

    getContactsByCategory(category) {
        return CONTACTS.filter(item => item['categories'].includes(category));
    }

}
