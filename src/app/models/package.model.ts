import { OrderProductModel } from './order-product.model';
import { ShopModel } from './shop.model';

class DeliveryStatusModel {
    id?: number;
    code?: string;
    description?: string; 
}

class DeliveryTypeModel {
    id?: number;
    type?: number;
    description?: string;     
}

class PackageStatusModel {
    id?: number;
    name?: string;
}

export class PackageModel {
    id?: number;
    order_id?: number;
    order_product?: OrderProductModel;
    shop?: ShopModel;
    status?: PackageStatusModel;
    delivery_type?: DeliveryTypeModel;
    delivery_status?: DeliveryStatusModel;
}