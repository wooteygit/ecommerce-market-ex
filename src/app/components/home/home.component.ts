import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Config } from '../../../environments/environment';
import { ProductModel } from '../../models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    config: any = Config;
    products: ProductModel[] = [{
        name: "Congue potenti pulvinar montes iaculis mus, fermentum nihil minima",
        main_picture: "/products/1.jpg",
        price: 100
    }, {
        name: "Massa fames eaque deserunt proident perspiciatis, minima hymenaeos unde",
        main_picture: "/products/2.jpg",
        price: 250
    }, {
        name: "Praesentium curabitur, aliquam soluta hac atque, temporibus aptent",
        main_picture: "/products/3.jpg",
        price: 80
    }, {
        name: "Pellentesque eaque voluptatibus aenean laborum deserunt ac montes nesciunt maxime",
        main_picture: "/products/4.jpg",
        price: 530
    }];

    constructor(meta: Meta, title: Title) {

        title.setTitle('Home');

        meta.addTags([
            {
                name: 'author', content: 'ECommerce Thailand'
            },
            {
                name: 'keywords', content: 'curae, doloremque, euismod blandit, dapibus'
            },
            {
                name: 'description', content: 'Aliqua sagittis facere distinctio pharetra tempus maecenas eaque.'
            },
            {
                property: 'og:type', content: "website"
            }
        ])

    }

    ngOnInit() {
    }

}
