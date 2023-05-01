import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/model/basket.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isBasketActive: boolean = false;
  basket: BasketModel | null = null;

  constructor(private basketStore: Store<{ basket: BasketModel }>) {}

  ngOnInit(): void {
    this.basketStore.select('basket').subscribe((data) => (this.basket = data));
  }

  onBasketClick() {
    this.isBasketActive = !this.isBasketActive;
  }

  get sumBasket() {
    return this.basket?.products.reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0);
  }
}
