import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInspectionsComponent } from './components/list-inspections/list-inspections.component';
import { ManageInspectionsComponent } from './components/manage-inspections/manage-inspections.component';
import { InspectionSheetsRoutingModule } from './inspectionsheets-routing.module';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
    declarations: [
        ListInspectionsComponent,
        ManageInspectionsComponent
    ],
    imports: [
        CommonModule,
        InspectionSheetsRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        CalendarModule,
        MultiSelectModule,
        AutoCompleteModule,
        TooltipModule,
        ToggleButtonModule,
        SelectButtonModule,
        TabViewModule,
    ]
})
export class InspectionSheetsModule { }
