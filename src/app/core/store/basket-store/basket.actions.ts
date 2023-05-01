import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/model/product.model';

export const addToCart = createAction(
  'addToCart',
  props<{ product: ProductModel }>()
);
export const removeFromCart = createAction(
  'removeFromCart',
  props<{ productId: number }>()
);
