import { Component, OnInit } from '@angular/core';
import { Config } from '../../environments/environment';

import { AuthenService } from '../services/authen.service';
import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appName = Config.AppName;
    year = new Date().getFullYear();

    constructor(public authenService: AuthenService, public cartService: CartService, private storageService: StorageService) { }

    ngOnInit(): void {
        this.cartService.load();
        this.authenService.load();
    }
}

@Component({
    template: `<div class="fill-dock">
        <div class="d-flex v-center h-center h-100">Page Not Found</div>
    </div>`
})
export class PageNotFoundComponent {
}
