import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../services/cart.service';
import { OrderModel } from '../../../models/order.model';

@Component({
    selector: 'app-complete',
    templateUrl: './complete.component.html',
    styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
    order: OrderModel = {
        no: '17092700001',
        order_date: new Date(),
        total_qty: 3,
        total_price: 1020,
        status: {
            id: 1,
            name: 'Waiting for Payment'
        },
        delivery_address: {
            first_name: 'Chanon',
            last_name: 'Trising',
            full_address: '78/108 City Sense, Watcharapol Road, Tarang, Bangkhen, Bangkok - 10230',
            telephone: '0812594918'
        },
        payment: {
            id: 1,
            name: 'Credit or Debit Card'
        }
    };

    constructor(public cartService: CartService) { }

    ngOnInit() {
    }

}
