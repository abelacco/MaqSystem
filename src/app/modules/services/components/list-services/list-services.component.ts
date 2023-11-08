import { Component } from '@angular/core';

@Component({
    selector: 'app-list-services',
    templateUrl: './list-services.component.html',
    styleUrls: ['./list-services.component.scss']
})
export class ListServicesComponent {

    fullscreentable = false;
    filtershow = true;

    equipmentArray = [
        {
            date: "11/08/2023",
            placa: "B3-0340",
            name: "Cambio de llantas",
            servicetype: 0,
            type: "M. Preventivo"
        },
        {
            date: "11/08/2023",
            placa: "B3-0340",
            name: "Cambio de llantas",
            servicetype: 1,
            type: "M. Correctivo"
        },
        {
            date: "11/08/2023",
            placa: "B3-0340",
            name: "Cambio de llantas",
            servicetype: 2,
            type: "En servicio"
        },
        {
            date: "11/08/2023",
            placa: "B3-0340",
            name: "Cambio de llantas",
            servicetype: 3,
            type: "En el local"
        },
    ]
}
