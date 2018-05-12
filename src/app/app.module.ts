import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactViewComponent } from './contact-view/contact-view.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
