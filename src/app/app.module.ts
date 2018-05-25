import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


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
        ContactViewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: ContactsComponent},
            {path: 'contacts', component: ContactsComponent},
            {path: 'contacts/All Contacts', redirectTo: '/contacts'},
            {path: 'contacts/:id', component: ContactsComponent},
            {path: 'create', component: ContactFormComponent},
            {path: 'contact/:id', component: ContactViewComponent},
            /*{path: '**', component: PageNotFoundComponent }*/
        ])
    ],
    providers: [ContactsService,
                UserService,
                CategoriesService],
    bootstrap: [AppComponent]
})
export class AppModule {


}
