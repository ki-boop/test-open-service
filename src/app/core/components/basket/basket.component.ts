import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/model/basket.model';
import { removeFromCart } from '../../store/basket-store/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket: BasketModel | null = null;
  constructor(private basketStore: Store<{ basket: BasketModel }>) {}

  ngOnInit(): void {
    this.basketStore.select('basket').subscribe((res) => {
      this.basket = res;
    });
  }

  get totalSum() {
    return this.basket?.products.reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0);
  }

  removeProduct(id: number) {
    this.basketStore.dispatch(removeFromCart({ productId: id }));
  }
}
