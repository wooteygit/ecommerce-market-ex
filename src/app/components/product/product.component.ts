import { Component, OnInit } from '@angular/core';

import { Config } from '../../../environments/environment';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    config: any = Config;
    product: ProductModel = null;
    qty: number = 1;

    constructor(public cartService: CartService) { }

    ngOnInit() {
        this.product = {
            id: 1,
            name: "Blandit consequatur molestiae sit cubilia. Officiis omnis aute sociis pharetra quisque convallis",
            main_picture: "/products/1.jpg",
            pictures: ["/products/1.jpg", "/products/2.jpg", "/products/3.jpg", "/products/4.jpg"],
            price: 250,
            description: `
                Netus recusandae vel. Iure? Officia ullam nullam eiusmod. Mi irure? Morbi incidunt et necessitatibus.<br><br>
                A corrupti eum illo phasellus earum donec justo? Cum vestibulum ullamcorper metus, augue temporibus class curae nullam? Voluptatum.<br><br>
                Adipiscing dictumst aliquid quibusdam, vulputate habitant! Inceptos accumsan, vulputate minim error.
            `
        };
    }
    
    addCart(): void {
        this.cartService.add({
            qty: this.qty,
            product: {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                main_picture: this.product.main_picture
            }
        });
    }

    selectPicture(subPicture: string): void {
        this.product.main_picture = subPicture;
    }
}
