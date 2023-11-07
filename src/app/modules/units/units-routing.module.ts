import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListUnitsComponent } from './components/list-units/list-units.component';
import { ManageUnitsComponent } from './components/manage-units/manage-units.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ListUnitsComponent },
        { path: 'nuevo', component: ManageUnitsComponent }
    ])],
    exports: [RouterModule]
})
export class UnitsRoutingModule { }
