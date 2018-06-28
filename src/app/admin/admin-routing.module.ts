import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminListComponent} from '../admin-list/admin-list.component';
import {AdminItemComponent} from '../admin-item/admin-item.component';
import {AuthGuard} from "../auth.guard";

const routes: Routes = [{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        pathMatch: 'full',
        component: AdminListComponent
    }, {
        path: 'list',
        component: AdminListComponent,
        data: { title: ' AdminComponent --> AdminListComponent' }
    }, {
        path: ':id',
        component: AdminItemComponent,
        data: { title: 'AdminComponent --> AdminItemComponent' }
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
