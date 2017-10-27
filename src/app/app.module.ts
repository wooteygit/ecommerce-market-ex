import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CheckoutModule } from './checkout.module';
import { AccountModule } from './account.module';

import { AppComponent, PageNotFoundComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthenService } from './services/authen.service';
import { AuthenGuardService } from './services/authen-guard.service';
import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import { OpenShopComponent } from './components/open-shop/open-shop.component';

import { TreeMenuElement } from './elements/tree-menu/tree-menu.element';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
        CategoryComponent,
        ProductComponent,
        LoginComponent,
        SignupComponent,
        OpenShopComponent,
        TreeMenuElement
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ang4-seo' }),
        FormsModule,
        HttpClientModule,
        AccountModule,
        CheckoutModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'open-shop',
                component: OpenShopComponent
            },
            {
                path: 'category/:name',
                component: CategoryComponent
            },
            {
                path: 'product/:id',
                component: ProductComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            { 
                path: '**', 
                component: PageNotFoundComponent 
            }
        ])
    ],
    providers: [AuthenService, AuthenGuardService, StorageService, CartService],
    bootstrap: [AppComponent]
})
export class AppModule { }
