import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListInspectionsComponent } from './components/list-inspections/list-inspections.component';
import { ManageInspectionsComponent } from './components/manage-inspections/manage-inspections.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ListInspectionsComponent },
        { path: 'nuevo', component: ManageInspectionsComponent },
        { path: 'editar', component: ManageInspectionsComponent }
    ])],
    exports: [RouterModule]
})
export class InspectionSheetsRoutingModule { }
