import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../../../environments/environment';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    config: any = Config;

    constructor(public cartService: CartService, private router: Router) { }

    ngOnInit() {
    }

    next() {
        this.router.navigate(['/checkout/delivery']);
    }
}
