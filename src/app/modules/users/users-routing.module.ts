import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ListUsersComponent },
        { path: 'nuevo', component: ManageUsersComponent }
    ])],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
