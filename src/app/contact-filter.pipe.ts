import { Pipe, PipeTransform } from '@angular/core';
import { SearchContactsService } from './shared/search-contacts.service';

@Pipe({
  name: 'contactPipeFilter'
})
export class ContactFilterPipe implements PipeTransform {

    letter: string;

    constructor(private searchContactsService: SearchContactsService) {
        this.letter = this.searchContactsService.filterForContacts;
        console.log(this.searchContactsService.filterForContacts);
        this.searchContactsService.updateSubscribers.push(this.updateFilteredCont.bind(this));
    }

    transform(allContacts) {

        var cont = (this.letter !== '') ? allContacts.filter(contact => contact['surname'].toLocaleLowerCase().includes(this.letter))
            : allContacts;
        console.log(cont);
        return cont;
    }

    updateFilteredCont() {
        this.letter = this.searchContactsService.filterForContacts;
    }
}
