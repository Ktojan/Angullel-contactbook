export class Contact {
    constructor(public surname: string,
                public name: string,
                public position: string,
                public url?: string,
                public phone?: string,
                public email?: string,
                public facebook?: string,
                public instagram?: string,
                public birthday?: string,
                public information?: string,
                public category?: any) {
        this.surname= surname;
        this.name= name;
        this.position= position;
        this.url= url;
        this.phone= phone;
        this.email= email;
        this.facebook= facebook;
        this.instagram= instagram;
        this.birthday= birthday;
        this.information= information;
        this.category= category;
    }
}
