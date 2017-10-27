import { Component, OnInit } from '@angular/core';

import { AddressModel } from '../../../models/address.model';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
    addresses: AddressModel[] = [{
        first_name: 'Chanon',
        last_name: 'Trising',
        full_address: '78/108 City Sense, Watcharapol Road, Tarang, Bangkhen, Bangkok - 10230',
        telephone: '0812594918'
    }];

    constructor() { }

    ngOnInit() {
    }

}
