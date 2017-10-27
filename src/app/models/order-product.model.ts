import { ProductModel } from './product.model';

export class OrderProductModel {
    qty?: number;
    pack?: boolean;
    product?: ProductModel;
}