import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {SearchComponent} from './search/search.component';
import {CreateContactComponent} from './create-contact/create-contact.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {AsideComponent} from './aside/aside.component';
import {MainComponent} from './main/main.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ContactsService} from './shared/contacts.service';
import {UserService} from './shared/user.service';
import {CategoriesService} from './shared/categories.service';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { FormsModule } from '@angular/forms';  // для использования ngModel
import {SearchContactsService} from './shared/search-contacts.service';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        SearchComponent,
        CreateContactComponent,
        ContactFormComponent,
        AsideComponent,
        MainComponent,
        SideMenuComponent,
        ContactsComponent,
        ContactViewComponent,
        EditContactComponent,
        PageNotFoundComponent,
        ContactFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AdminModule
     /*   RouterModule.forRoot([
            {path: '', component: ContactsComponent},
            {path: 'contacts', component: ContactsComponent},
            {path: 'contacts/:id', component: ContactsComponent},
            {path: 'create', component: ContactFormComponent},
            {path: 'contact/:id', component: ContactViewComponent},
            {path: 'contact/:id/edit', component: EditContactComponent},
            {path: '**', component: PageNotFoundComponent}
        ])*/
    ],
    providers: [ContactsService,
                UserService,
                CategoriesService,
                SearchContactsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
