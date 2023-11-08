import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    optionsMap : google.maps.MapOptions = {
        center: { lat: -5.186114489530963, lng: -80.64136636446716 },
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoom: 14,
    }

    chartOptionsCard = null;
    chartDataCard = null;

    equipmentArray = [
        {
            type: "RODILLO VIBRATORIO COMPACTADOR",
            plates: "JKL012",
            location: "Sechura",
            service: "Compactación",
            date: "02/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "Sergio Vargas",
            engineer: "Elena Díaz",
            maintenanceEndDate: "12/11/2023"
        },
        {
            type: "MINICARGADOR 01",
            plates: "MNO345",
            location: "Catacaos",
            service: "Levantamiento de material",
            date: "05/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "Andrés Castro",
            engineer: "Patricia Solano",
            maintenanceEndDate: "10/11/2023"
        },
        {
            type: "MINICARGADOR 02",
            plates: "PQR678",
            location: "Chulucanas",
            service: "Maniobras de precisión",
            date: "07/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "Luis Méndez",
            engineer: "Diana Ortiz",
            maintenanceEndDate: "17/11/2023"
        },
        {
            type: "TRACTOR DE ORUGAS",
            plates: "STU901",
            location: "Morropón",
            service: "Desbroce de terreno",
            date: "10/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "Marco Ruiz",
            engineer: "Laura Jiménez",
            maintenanceEndDate: "15/11/2023"
        },
        {
            type: "MOTONIVELADORA",
            plates: "VWX234",
            location: "Ayabaca",
            service: "Nivelación de caminos",
            date: "13/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "Fernando González",
            engineer: "Sofía Martínez",
            maintenanceEndDate: "23/11/2023"
        },
        {
            type: "RETROEXCAVADORA",
            plates: "YZA567",
            location: "Huancabamba",
            service: "Excavación",
            date: "16/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "José Torres",
            engineer: "Carmen López",
            maintenanceEndDate: "21/11/2023"
        },
        {
            type: "CARGADOR FRONTAL",
            plates: "BCD890",
            location: "Paita",
            service: "Carga pesada",
            date: "18/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "David Sánchez",
            engineer: "Rosa García",
            maintenanceEndDate: "28/11/2023"
        },
        {
            type: "RODILLO COMPACTADOR",
            plates: "EFG321",
            location: "Tumbes",
            service: "Compactación de suelo",
            date: "20/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "Miguel Ángel Rodríguez",
            engineer: "Verónica Paz",
            maintenanceEndDate: "25/11/2023"
        },
        {
            type: "MINICARGADOR 03",
            plates: "HIJ654",
            location: "Máncora",
            service: "Limpieza de áreas",
            date: "22/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "Raúl Navarro",
            engineer: "Yolanda Vargas",
            maintenanceEndDate: "02/12/2023"
        },
        {
            type: "EXCAVADORA HIDRAULICA",
            plates: "KLM987",
            location: "Los Órganos",
            service: "Demolición",
            date: "24/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "Alberto Quiroz",
            engineer: "Teresa Rivas",
            maintenanceEndDate: "29/11/2023"
        },
        {
            type: "MOTONIVELADORA",
            plates: "NOP123",
            location: "Casma",
            service: "Aplanamiento de superficies",
            date: "27/11/2023",
            status: "En progreso",
            maintenanceType: "Correctivo",
            mechanic: "Hugo Espinoza",
            engineer: "Liliana Quintero",
            maintenanceEndDate: "07/12/2023"
        },
        {
            type: "TRACTOR DE ORUGAS",
            plates: "QRS456",
            location: "Chimbote",
            service: "Movimiento de tierras",
            date: "29/11/2023",
            status: "Finalizado",
            maintenanceType: "Preventivo",
            mechanic: "Gustavo Álvarez",
            engineer: "Norma Fuentes",
            maintenanceEndDate: "04/12/2023"
        }
    
    ];


    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartDataCard = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
            ]
        };

        this.chartOptionsCard = {
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false,
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        display: false,
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
