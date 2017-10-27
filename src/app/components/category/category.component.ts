import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { CategoryModel, CategoryFilterModel } from '../../models/category.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    products: ProductModel[] = [{
        name: "Congue potenti pulvinar montes iaculis mus, fermentum nihil minima",
        price: 100
    }, {
        name: "Massa fames eaque deserunt proident perspiciatis, minima hymenaeos unde",
        price: 250
    }, {
        name: "Praesentium curabitur, aliquam soluta hac atque, temporibus aptent",
        price: 80
    }, {
        name: "Pellentesque eaque voluptatibus aenean laborum deserunt ac montes nesciunt maxime",
        price: 530
    }, {
        name: "Diamlorem laudantium facilisis eius orci condimentum",
        price: 270
    }, {
        name: "Tenetur interdum pretium est, vestibulum impedit sodales praesentium",
        price: 440
    }, {
        name: "Interdum iste facilisis sollicitudin, debitis fermentum architecto ea natoque",
        price: 120
    }, {
        name: "Maecenas eius, reprehenderit corrupti aut recusandae nisi hic",
        price: 300
    }];

    child: string = 'sub_categories';
    category: CategoryModel = {
        id: "fashion",
        name: "Fashion",
        sub_categories: [{
            id: "fashion-boys",
            name: "Boys",
            sub_categories: [{
                id: "fashion-boys-clothing",
                name: "Clothing"
            }, {
                id: "fashion-boys-shoes",
                name: "Shoes",
                sub_categories: [{
                    id: "fashion-boys-shoes-sneakers",
                    name: "Sneakers"
                }, {
                    id: "fashion-boys-shoes-boots",
                    name: "Boots"
                }]
            }]
        }, {
            id: "fashion-girls",
            name: "Girls"
        }, {
            id: "fashion-women",
            name: "Women",
            sub_categories: [{
                id: "fashion-women-accessories",
                name: "Accessories"
            }]
        }]
    };
    categoryFilters: CategoryFilterModel[] = [{
        name: "GAME TYPE",
        filters: [{
            name: "Accumsan aliquid"
        }, {
            name: "Sodales hac"
        }, {
            name: "Felis malesuada"
        }, {
            name: "Blanditiis egestas"
        }, {
            name: "Tristique"
        }]
    }, {
        name: "INTEREST",
        filters: [{
            name: "Quo recusandae"
        }, {
            name: "Hymenaeos sodales"
        }]
    }];

    constructor() { }

    ngOnInit() {
    }

}
