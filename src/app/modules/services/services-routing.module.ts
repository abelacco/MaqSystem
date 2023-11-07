import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageServicesComponent } from './components/manage-services/manage-services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ListServicesComponent },
        { path: 'nuevo', component: ManageServicesComponent }
    ])],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
