import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared.module';

import { AccountComponent } from './components/account/account.component';
import { OrderComponent } from './components/account/order/order.component';
import { AddressComponent } from './components/account/address/address.component';
import { SettingComponent } from './components/account/setting/setting.component';
import { OrderDetailComponent } from './components/account/order-detail/order-detail.component';
import { AddressFormComponent } from './components/account/address-form/address-form.component';

import { AuthenGuardService } from './services/authen-guard.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forRoot([
            {
                path: 'account',
                component: AccountComponent,
                canActivate: [AuthenGuardService],
                children: [
                    {
                        path: '',
                        component: OrderComponent
                    },
                    {
                        path: 'order/:no',
                        component: OrderDetailComponent
                    },
                    {
                        path: 'address',
                        component: AddressComponent
                    },
                    {
                        path: 'address/:id',
                        component: AddressFormComponent
                    },
                    {
                        path: 'setting',
                        component: SettingComponent
                    }
                ]
            }
        ])
    ],
    declarations: [AccountComponent, OrderComponent, AddressComponent, SettingComponent, OrderDetailComponent, AddressFormComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthenGuardService]
})
export class AccountModule { }
