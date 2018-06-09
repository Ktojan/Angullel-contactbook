import { Pipe, PipeTransform } from '@angular/core';
import { SearchContactsService } from './shared/search-contacts.service';

@Pipe({
  name: 'contactPipeFilter'
})
export class ContactFilterPipe implements PipeTransform {

    letter: string;

    constructor(private searchContactsService: SearchContactsService) {
        this.letter = this.searchContactsService.filterForContacts || 'n'; /*todo delete second*/
        console.log(this.searchContactsService.filterForContacts);
        this.searchContactsService.updateSubscribers.push(this.updateFilteredCont);
    }

    transform(allContacts) {
        return (this.letter !== '') ? allContacts.filter(contact => contact['surname'].toLocaleLowerCase().includes(this.letter))
            : allContacts;
    }

    updateFilteredCont() {
        this.letter = this.searchContactsService.filterForContacts;
    }
}
