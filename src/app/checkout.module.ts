import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/checkout/cart/cart.component';
import { DeliveryComponent } from './components/checkout/delivery/delivery.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { CompleteComponent } from './components/checkout/complete/complete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'checkout',
                component: CheckoutComponent,
                children: [
                    { 
                        path: '', 
                        component: CartComponent 
                    },
                    { 
                        path: 'delivery', 
                        component: DeliveryComponent
                    },
                    { 
                        path: 'payment', 
                        component: PaymentComponent
                    },
                    {   
                        path: 'complete', 
                        component: CompleteComponent
                    }
                ]
            }
        ])
    ],
    declarations: [CheckoutComponent, CartComponent, DeliveryComponent, PaymentComponent, CompleteComponent]
})
export class CheckoutModule { }
