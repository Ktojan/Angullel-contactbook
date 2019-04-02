export class Contact {
    constructor(public surname: string,
                public name: string,
                public position: string,
                public url?: string,  //image
                public phone?: string, /**[{ "_id": "58a446fcc26aaf13460533bd",    "category": "mobile",    "value": "+38096*******"}]*/
                public email?: string,  //[ "y.chikhrai@shipnext.com" ]
                public facebook?: string,
                public instagram?: string,
                public bornDate?: string,  
                public information?: string,
                public category?: string
               ) {
        this.surname= surname;
        this.name= name;
        this.position= position;
        this.url= url;
        this.phone= phone;
        this.email= email;
        this.facebook= facebook;
        this.instagram= instagram;
        this.bornDate = bornDate;
        this.information= information;
        this.category= category;
    }
}
