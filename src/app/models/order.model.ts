
import { OrderProductModel } from './order-product.model';
import { AddressModel } from './address.model';
import { PackageModel } from './package.model';

class OrderStatusModel {
    id?: number;
    name?: string;
}

class PaymentModel {
    id?: number;
    name?: string;
    complete?: boolean;
}

export class OrderModel {
    id?: number;
    no?: string;
    order_by?: number;
    order_date?: Date;
    status?: OrderStatusModel;
    payment?: PaymentModel;
    total_qty?: number;
    total_price?: number;
    delivery_address?: AddressModel;
    order_products?: OrderProductModel[];
    packages?: PackageModel[];
}