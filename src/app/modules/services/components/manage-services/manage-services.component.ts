import { Component } from '@angular/core';

@Component({
    selector: 'app-manage-services',
    templateUrl: './manage-services.component.html',
    styleUrls: ['./manage-services.component.scss']
})
export class ManageServicesComponent {

    valToggle = false;

    paymentOptions = [
        { name: 'PREVENTIVO', value: 1 },
        { name: 'CORRECTIVO', value: 2 },
    ];

    intervalMaintenance = [
        { name: 'PM1', value: 1 },
        { name: 'PM2', value: 2 },
        { name: 'PM3', value: 3 },
        { name: 'PM4', value: 4 },
    ];

}
