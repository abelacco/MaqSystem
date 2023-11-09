import { Component } from '@angular/core';

@Component({
  selector: 'app-list-inspections',
  templateUrl: './list-inspections.component.html',
  styleUrls: ['./list-inspections.component.scss']
})
export class ListInspectionsComponent {

    fullscreentable = false;
    filtershow = true;

    equipmentArray = [
        {
            number: "#-123123123",
            date: "11/08/2023",
            unit: "EXCAVADORA HIDRAULICA DE ORUGAS",
            mechanic: "JUAN PEREZ",
        },
        {
            number: "#-123123123",
            date: "11/08/2023",
            unit: "RETROEXCAVADORA",
            mechanic: "ROBERTO PEREZ",
        },
        {
            number: "#-123123123",
            date: "11/08/2023",
            unit: "RETROEXCAVADORA",
            mechanic: "ROBERTO PEREZ",
        },
        {
            number: "#-123123123",
            date: "11/08/2023",
            unit: "CARGADOR FRONTAL SOBRE RUEDAS",
            mechanic: "EDINSON FLORES",
        },
        {
            number: "#-123123123",
            date: "11/08/2023",
            unit: "RODILLO VIBRATORIO COMPACTADOR",
            mechanic: "ROBERTO JUARES",
        },
    ]

}
