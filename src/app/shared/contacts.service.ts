import { Injectable} from '@angular/core';
import {CategoriesService} from './categories.service';


@Injectable()
export class ContactsService {

    categories = [];
    CONTACTS = [
    {
        surname: 'Bogatyrev',
        name: 'Yuriy',
        desc: 'uncle',
        url: '../../assets/img/bogatyrev.jpg',
        phone: '1111111',
        email: 'bogatyrev@yandex.ru',
        facebook: '',
        instagram: '',
        birthday: '',
        information: 'Свой среди своих, чужой среди чужих. Все как положено. '
    },
    {
        surname: 'Weis',
        name: 'Rachel',
        desc: 'coworker',
        url: '../../assets/img/weis.jpg',
        phone: '',
        email: 'rachelweis@gmail.com',
        facebook: 'facebook.weis',
        instagram: 'instagram.rachelweis',
        birthday: '',
        information: ''
    },
    {
        surname: 'Irons',
        name: 'Jeremy',
        desc: 'family member',
        url: '../../assets/img/irons.jpg',
        phone: '3333333',
        email: '',
        facebook: '',
        instagram: '',
        birthday: '3/3/1943',
        information: 'some info about Jeremy'
    },
    {
        surname: 'Hamatova',
        name: 'Chulpan',
        desc: 'girl-friend :-)',
        url: '../../assets/img/hamatova.jpg',
        phone: '4444444',
        email: 'hamatova@yandex.ru',
        facebook: 'facebook.hamatova',
        instagram: '',
        birthday: '',
        information: 'Вечно молодая'
    },
    {
        surname: 'Costner',
        name: 'Kevin',
        desc: 'job',
        url: '../../assets/img/kostner.jpg',
        phone: '',
        email: 'costner@gmail.com',
        facebook: '',
        instagram: 'instagram.costner',
        birthday: '5/5/1975',
        information: 'Dances with bodyguard'
    },
        {
            surname: 'Hopkins',
            name: 'Sir Philip Anthony',
            desc: 'friend',
            url: '../../assets/img/hopkins.jpg',
            phone: '6666666',
            email: '',
            facebook: '',
            instagram: '',
            birthday: '31/3/1937',
            information: `Considered to be one of the greatest living actors, Hopkins is well known
             for his portrayal of Hannibal Lecter in The Silence of the Lambs, for which he won the Academy 
             Award for Best Actor, its sequel Hannibal, and the prequel Red Dragon. Other notable films include 
             The Mask of Zorro, The Bounty, Meet Joe Black, The Elephant Man, Magic, 84 Charing Cross Road,
              Bram Stoker's Dracula, Legends of the Fall, Thor and its sequels, The Remains of the Day, Amistad,
               Nixon, The World's Fastest Indian, Instinct and Fracture. In 2015 he starred in the BBC television
                film The Dresser, and since 2016, he has starred in the critically acclaimed HBO television series Westworld.`
        },
        {
            surname: 'Marceau',
            name: 'Sophie',
            desc: 'sister',
            url: '../../assets/img/marso.jpg',
            phone: '',
            email: 'Marceau@gmail.com',
            facebook: '',
            instagram: 'instagram.marceau',
            birthday: '17/11/1966',
            information: ''
        },
        {
            surname: 'Menshikov',
            name: 'Oleg',
            desc: 'Mate from school',
            url: '../../assets/img/menshikov.jpg',
            phone: '',
            email: '',
            facebook: '',
            instagram: '',
            birthday: '',
            information: 'Утомленный Михалковым'
        },
        {
            surname: 'Musk',
            name: 'Elon',
            desc: 'boss',
            url: '../../assets/img/musk.jpg',
            phone: '',
            email: 'imthegod@elon.com',
            facebook: '',
            instagram: '',
            birthday: '28/6/1971',
            information: 'Plan on 2023: cheap electro-spaceships to Mars, 4days-trip'
        }
];

    constructor(private categoriesService: CategoriesService) {
        this.categories = this.categoriesService.getCategories();
        this.addCategoryByDescription();
    }


    getContacts() {
        return this.CONTACTS;
    }


    addCategoryByDescription(): void {
        const self = this;
        this.CONTACTS.forEach(function (item) {
            let cat = [];
            if (item['categories'] === undefined) {
            switch (item['desc']) {
                case 'uncle':
                case 'sister': {
                    cat.push(self.categories[0]);
                    break;
                }
                case 'friend': {
                    cat.push(self.categories[1]);
                    break;
                }
                case 'work':
                case 'boss':
                case 'coworker':
                case 'job':{
                    cat.push(self.categories[2]);
                    break;
                }
            };
            item['categories'] = cat;
            console.log(item);
               /* if (item['desc'].indexOf(variant) !== -1) {  // например в 'sister-in-law' содержится 'sister'
                    if (self.categoryContacts.indexOf(item) === -1) // проверка, что этот элемент не был добавлен
                        self.categoryContacts.push(item);
                }*/
            }
        });

    }
}
