import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';
import { AddressModel } from '../../../models/address.model';

@Component({
    selector: 'app-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
    addresses: AddressModel[] = [{
        default: true,
        first_name: 'Chanon',
        last_name: 'Trising',
        full_address: '78/108 City Sense, Watcharapol Road, Tarang, Bangkhen, Bangkok - 10230',
        telephone: '0812594918'
    }, {
        first_name: 'Prapatsorn',
        last_name: 'Apiwannarat',
        full_address: '999/107 Lio, Phahonyothin Road, Klong tanon, Sai mai, Bangkok - 10220',
        telephone: '0804290298'
    }];

    constructor(public cartService: CartService, private router: Router) { }

    ngOnInit() {
    }

    prev(): void {
        this.router.navigate(['/checkout']);
    }

    next(): void {
        this.router.navigate(['/checkout/payment']);
    }
}
