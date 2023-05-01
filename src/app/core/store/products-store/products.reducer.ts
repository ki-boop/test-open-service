import { createReducer, on } from '@ngrx/store';
import { setProducts } from './products.actions';
import { ProductModel } from 'src/app/model/product.model';

export const productsState: ProductModel[] = [];

export const productsReducer = createReducer(
  productsState,
  on(setProducts, (state, { products }) => products)
);
