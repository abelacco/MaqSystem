import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-inspections',
  templateUrl: './manage-inspections.component.html',
  styleUrls: ['./manage-inspections.component.scss']
})
export class ManageInspectionsComponent {
    equipmentArray = Array.from(Array(14).keys());
}
