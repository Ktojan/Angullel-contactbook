import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminListComponent } from '../admin-list/admin-list.component';
import { AdminItemComponent } from '../admin-item/admin-item.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AdminListComponent,
        AdminItemComponent]
})
export class AdminModule { }

