import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // для использования ngModel
import {  HttpClientModule } from '@angular/common/http';

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
import { ContactsService } from './shared/contacts.service';
import { UserService } from './shared/user.service';
import { CategoriesService } from './shared/categories.service';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactFilterPipe } from './contact-filter.pipe';
import { SearchContactsService } from './shared/search-contacts.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';


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
        ContactFilterPipe,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AdminModule,
        HttpClientModule
    ],
    providers: [ContactsService,
                UserService,
                CategoriesService,
                SearchContactsService,
                AuthGuard,
                AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
