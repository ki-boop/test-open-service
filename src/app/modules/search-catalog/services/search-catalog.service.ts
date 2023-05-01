import { Injectable } from '@angular/core';
import axios from 'axios';
import { ProductModel } from 'src/app/model/product.model';
import { Store } from '@ngrx/store';
import { setProducts } from 'src/app/core/store/products-store/products.actions';

@Injectable({ providedIn: 'root' })
export class SearchCatalogService {
  constructor(private productsStore: Store<{ products: ProductModel[] }>) {}

  products: ProductModel[] = [];

  searchProducts(categoryId: number, value: string) {
    const searchString = value.toLowerCase();
    return axios.get('./assets/mock/nomenclature.json').then((res) => {
      this.productsStore.dispatch(
        setProducts({
          // TODO refactor
          products: res.data[0].filter((pr: ProductModel) => {
            return (categoryId ? pr.category !== categoryId : false) ||
              pr.name.toLowerCase().indexOf(searchString) === -1
              ? false
              : true;
          }),
        })
      );
    });
  }
}
