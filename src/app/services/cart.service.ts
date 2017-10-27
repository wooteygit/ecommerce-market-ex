import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { OrderProductModel } from '../models/order-product.model';

import { StorageService } from '../services/storage.service';

@Injectable()
export class CartService {
    totalQty: number = 0;
    totalPrice: number = 0;
    products: OrderProductModel[] = [];

    constructor(private storageService: StorageService) { }

    private calc(): void {
        this.totalQty = 0;
        this.totalPrice = 0;

        for (let i of this.products) {
            this.totalPrice += i.product.price * i.qty;
            this.totalQty += i.qty;
        }
    }

    private save(): void {        
        this.storageService.set('cart', {
            totalQty: this.totalQty,
            totalPrice: this.totalPrice,
            products: this.products
        });
    }
    
    load(): void {
        let cart: any = this.storageService.get('cart');
        if (cart) {
            this.totalQty = cart.totalQty;
            this.totalPrice = cart.totalPrice;
            this.products = cart.products;
        }
    }

    clear(): void {
        this.totalQty = 0;
        this.totalPrice = 0;
        this.products = [];

        this.storageService.remove('cart');
    }

    add(cartProduct: OrderProductModel): void {        
        let index: number = this.products.findIndex((elm) => {
            return elm.product.id == cartProduct.product.id;
        });

        if (index > -1) {
            let i = this.products[index];
            i.qty += cartProduct.qty;
            this.products.splice(index, 1, i);
        }
        else {
            this.products.push(cartProduct);
        }

        this.calc();
        this.save();
    }
    
    update(cartProduct: OrderProductModel): void {
        let index: number = this.products.findIndex((elm) => {
            return elm.product.id == cartProduct.product.id;
        });
        this.products.splice(index, 1, cartProduct);

        this.calc();
        this.save();
    }
    
    remove(cartProduct: OrderProductModel): void {
        let index: number = this.products.findIndex((elm) => {
            return elm.product.id == cartProduct.product.id;
        });
        this.products.splice(index, 1);

        this.calc();   
        this.save();
    }
}
