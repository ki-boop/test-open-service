import { ProductInBasket } from './product.model';

export class BasketModel {
  products: ProductInBasket[];

  constructor(source: any) {
    this.products = source.products;
  }
}
