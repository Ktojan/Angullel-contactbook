import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactViewComponent} from './contact-view/contact-view.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
    {path: '', component: ContactsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'contacts/:id', component: ContactsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'create', component: ContactFormComponent},
    {path: 'contact/:id', component: ContactViewComponent},
    {path: 'contact/:id/edit', component: EditContactComponent},
    {path: '**', component: PageNotFoundComponent}
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

