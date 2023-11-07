import { Component } from '@angular/core';

@Component({
  selector: 'app-list-units',
  templateUrl: './list-units.component.html',
  styleUrls: ['./list-units.component.scss']
})
export class ListUnitsComponent {

    fullscreentable = false;
    filtershow = true;

    equipmentArray = [
        {
            type: "EXCAVADORA HIDRAULICA DE ORUGAS",
            brand: "CATERPILLAR",
            model: "326D2L",
            engineSerial: "BD403148",
            chassisSerial: "CAT0326DCMZH10035",
            yearOfManufacture: 2017,
            invoice: "F301-420",
            supplier: "FERREYROS SA",
            notes: "VENDIDO"
        },
        {
            type: "RETROEXCAVADORA",
            brand: "CATERPILLAR",
            model: "420F2-BE3",
            engineSerial: "G4D57324",
            chassisSerial: "LBS00474",
            yearOfManufacture: 2016,
            invoice: "F051-15280",
            supplier: "UNIMAQ",
            notes: "LIBERADA"
        },
        {
            type: "RETROEXCAVADORA",
            brand: "CATERPILLAR",
            model: "426F2",
            engineSerial: "C4900970",
            chassisSerial: "EJ405056",
            yearOfManufacture: 2022,
            invoice: "FP18-316",
            supplier: "UNIMAQ",
            notes: "AUN SE ESTA CANCELANDO A UNIMAQ"
        },
        {
            type: "CARGADOR FRONTAL SOBRE RUEDAS",
            brand: "CATERPILLAR",
            model: "950H",
            engineSerial: "TX703564",
            chassisSerial: "JLX00941",
            yearOfManufacture: 2016,
            invoice: "F301-277",
            supplier: "FERREYROS SA",
            notes: "LIBERADA"
        },
        {
            type: "RODILLO VIBRATORIO COMPACTADOR",
            brand: "CATERPILLAR",
            model: "CS533E",
            engineSerial: "CST05249",
            chassisSerial: "TJL03680",
            yearOfManufacture: 2013,
            invoice: "303-315",
            supplier: "FERREYROS SA",
            notes: "LIBERADA"
        },
        {
            type: "RODILLO COMPACTADOR",
            brand: "CATERPILLAR",
            model: "CB22",
            engineSerial: "CMY06033",
            chassisSerial: "LR200160",
            yearOfManufacture: 2016,
            invoice: "F051-11088",
            supplier: "UNIMAQ SA",
            notes: "LIBERADA"
        },
        {
            type: "MINICARGADOR 01",
            brand: "CATERPILLAR",
            model: "246D",
            engineSerial: "8EG2010",
            chassisSerial: "HMR00923",
            yearOfManufacture: 2014,
            invoice: "014-8289",
            supplier: "UNIMAQ SA",
            notes: "LIBERADA"
        },
        {
            type: "MINICARGADOR 02",
            brand: "JOHN DEERE",
            model: "318G",
            engineSerial: "CH4X21H000103",
            chassisSerial: "1T0318GAXGG302816",
            yearOfManufacture: 2016,
            invoice: "F009-2967",
            supplier: "IPESA SAC",
            notes: "LIBERADA"
        },
        {
            type: "MINICARGADOR 03",
            brand: "CATERPILLAR",
            model: "246D",
            engineSerial: "8KG5084",
            chassisSerial: "HMR02747",
            yearOfManufacture: 2019,
            invoice: "F051-28383",
            supplier: "UNIMAQ SA",
            notes: "LIBERADA"
        },
        {
            type: "TRACTOR DE ORUGAS",
            brand: "CATERPILLAR",
            model: "D6T",
            engineSerial: "THX36723",
            chassisSerial: "SMC00481",
            yearOfManufacture: 2015,
            invoice: "F301-67",
            supplier: "FERREYROS SA",
            notes: "LIBERADA"
        },
        {
            type: "MOTONIVELADORA",
            brand: "KOMATSU",
            model: "GD 555-5",
            engineSerial: "26683538",
            chassisSerial: "56103",
            yearOfManufacture: 2018,
            invoice: "F003-13099",
            supplier: "KOMATSU SA",
            notes: "LIBERADA"
        },
        {
            type: "MOTONIVELADORA",
            brand: "KOMATSU",
            model: "GD 555-5",
            engineSerial: "26683538",
            chassisSerial: "56103",
            yearOfManufacture: 2018,
            invoice: "F003-13099",
            supplier: "KOMATSU SA",
            notes: "LIBERADA"
        },
        {
            type: "MOTONIVELADORA",
            brand: "KOMATSU",
            model: "GD 555-5",
            engineSerial: "26683538",
            chassisSerial: "56103",
            yearOfManufacture: 2018,
            invoice: "F003-13099",
            supplier: "KOMATSU SA",
            notes: "LIBERADA"
        },
        {
            type: "MOTONIVELADORA",
            brand: "KOMATSU",
            model: "GD 555-5",
            engineSerial: "26683538",
            chassisSerial: "56103",
            yearOfManufacture: 2018,
            invoice: "F003-13099",
            supplier: "KOMATSU SA",
            notes: "LIBERADA"
        },
        {
            type: "MOTONIVELADORA",
            brand: "KOMATSU",
            model: "GD 555-5",
            engineSerial: "26683538",
            chassisSerial: "56103",
            yearOfManufacture: 2018,
            invoice: "F003-13099",
            supplier: "KOMATSU SA",
            notes: "LIBERADA"
        }
    ];

    constructor() {}

}
