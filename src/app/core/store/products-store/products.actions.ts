import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/model/product.model';

export const setProducts = createAction(
  'setProducts',
  props<{ products: ProductModel[] }>()
);
