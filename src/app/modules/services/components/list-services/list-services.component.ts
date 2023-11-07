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
            name: "Cambio de llantas",
            type: "Camion"
        },
        {
            name: "Lavado",
            type: "Camion"
        },
        {
            name: "abelaca en 4",
            type: "Camion"
        }
    ]
}
