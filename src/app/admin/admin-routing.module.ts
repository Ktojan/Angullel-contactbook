import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminListComponent} from '../admin-list/admin-list.component';
import {AdminItemComponent} from '../admin-item/admin-item.component';

const routes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    children: [{
        path: '',
        pathMatch: 'full',
        component: AdminListComponent
        //redirectTo: '/list'
    }, {
        path: 'list',
        component: AdminListComponent,
       // data: { title: 'Heroes List' }
    }, {
        path: ':id',
        component: AdminItemComponent
    }]
}];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
