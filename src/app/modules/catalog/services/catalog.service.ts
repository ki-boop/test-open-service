import { Injectable } from '@angular/core';
import axios from 'axios';
import { ProductModel } from 'src/app/model/product.model';
import { Store } from '@ngrx/store';
import { CategoryModel } from 'src/app/model/category.model';
import { setCategories } from 'src/app/core/store/categories-store/categories.actions';
import { setProducts } from 'src/app/core/store/products-store/products.actions';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  constructor(
    private categoryStore: Store<{ categories: CategoryModel[] }>,
    private productsStore: Store<{ products: ProductModel[] }>
  ) {}

  products: ProductModel[] = [];
  fetchAny() {
    return axios.get('./assets/mock/nomenclature.json').then((res) => {
      this.productsStore.dispatch(setProducts({ products: res.data[0] }));
      this.categoryStore.dispatch(setCategories({ categories: res.data[1] }));
    });
  }

  getProductsByCategoryId(id: number) {
    return axios.get('./assets/mock/nomenclature.json').then((res) => {
      this.productsStore.dispatch(
        setProducts({
          products: res.data[0].filter((pr: ProductModel) => {
            return pr.category === id;
          }),
        })
      );
    });
  }
}
