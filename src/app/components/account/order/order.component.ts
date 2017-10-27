import { Component, OnInit } from '@angular/core';

import { OrderModel } from '../../../models/order.model';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    orders: OrderModel[] = [{
        no: '17092700001',
        order_date: new Date(),
        total_qty: 3,
        total_price: 1020,
        status: {
            id: 1,
            name: 'Waiting for Payment'
        }
    }, {
        no: '17092700001',
        order_date: new Date(),
        total_qty: 2,
        total_price: 500,
        status: {
            id: 1,
            name: 'Waiting for Payment'
        }
    }];

    constructor() { }

    ngOnInit() {
    }

}
