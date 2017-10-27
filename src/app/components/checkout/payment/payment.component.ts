import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    option: string = null;

    constructor(public cartService: CartService, private router: Router) { }

    ngOnInit() {
    }

    prev(): void {
        this.router.navigate(['/checkout/delivery']);
    }

    complete(): void {
        this.router.navigate(['/checkout/complete']);
    }
}
