import { Component } from '@angular/core';

@Component({
    selector: 'app-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

    fullscreentable = false;
    filtershow = true;

    equipmentArray = [
        {
            name: "abel",
            type: "admin"
        },
        {
            name: "cesar",
            type: "empleado"
        },
        {
            name: "jesus",
            type: "empleado"
        }
    ]

}
