import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

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
        information: ''
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
        information: ''
    },
    {
        surname: 'Costner',
        name: 'Kevin',
        desc: 'job, friend',
        url: '../../assets/img/kostner.jpg',
        phone: '',
        email: 'costner@gmail.com',
        facebook: '',
        instagram: 'instagram.costner',
        birthday: '5/5/1975',
        information: 'Dances with wolves - forever!'
    },
        {
            surname: 'Hopkins',
            name: 'Sir Philip Anthony',
            desc: 'old friend',
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
            desc: 'sister-in-law',
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
        }
];
    getContacts() {
        return this.CONTACTS;
    }

}
