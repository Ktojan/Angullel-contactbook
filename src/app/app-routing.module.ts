import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: ContactsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'contacts/:id', component: ContactsComponent},
    {path: 'create', component: ContactFormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contact/:id', component: ContactViewComponent},
    {path: 'contact/:id/edit', component: EditContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

