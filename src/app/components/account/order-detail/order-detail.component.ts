import { Component, OnInit } from '@angular/core';

import { OrderModel } from '../../../models/order.model';
import { Config } from '../../../../environments/environment';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
    config: any = Config;
    order: OrderModel = {
        no: '17092700001',
        order_date: new Date(),
        total_qty: 3,
        total_price: 1020,
        status: {
            id: 1,
            name: 'Prepare for Shipment'
        },
        delivery_address: {
            first_name: 'Chanon',
            last_name: 'Trising',
            full_address: '78/108 City Sense, Watcharapol Road, Tarang, Bangkhen, Bangkok - 10230',
            telephone: '0812594918'
        },
        payment: {
            id: 1,
            name: 'Credit or Debit Card',
            complete: true
        },
        order_products: [{
            qty: 2, 
            product: { 
                id: 1, 
                name: "Blandit consequatur molestiae sit cubilia. Officiis omnis aute sociis pharetra quisque convallis", 
                price: 250, 
                main_picture: "/products/1.jpg" 
            }
        }]
    };

    constructor() { }

    ngOnInit() {
    }

}
