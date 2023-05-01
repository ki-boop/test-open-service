import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/model/basket.model';
import { addToCart } from 'src/app/core/store/basket-store/basket.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: ProductModel | null = null;

  constructor(private basketStore: Store<{ basket: BasketModel }>) {}

  get productPrice() {
    return `${this.product?.price}₽`;
  }

  addToCart() {
    if (this.product)
      this.basketStore.dispatch(addToCart({ product: this.product }));
  }
}
