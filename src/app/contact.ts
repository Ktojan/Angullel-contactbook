export class Contact {
    constructor(public surname: string,
                public name: string,
                public desc: string,
                public url?: string,
                public phone?: string,
                public email?: string,
                public facebook?: string,
                public instagram?: string,
                public birthday?: string,
                public information?: string,
                public categories?: any) {
        this.surname= surname;
        this.name= name;
        this.desc= desc;
        this.url= url;
        this.phone= phone;
        this.email= email;
        this.facebook= facebook;
        this.instagram= instagram;
        this.birthday= birthday;
        this.information= information;
        this.categories= categories;
    }
}
