import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './basket.actions';
import { BasketModel } from 'src/app/model/basket.model';
import { ProductModel } from 'src/app/model/product.model';

export const basketState: BasketModel = new BasketModel({ products: [] });

export const basketReducer = createReducer(
  basketState,
  on(addToCart, (state, { product }) => ({
    ...state,
    products: addProduct(product, state),
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    products: removeProduct(productId, state),
  }))
);

const addProduct = (product: ProductModel, state: BasketModel) => {
  let copy = state.products.slice();

  let foundedProduct = copy.find((pr) => pr.id === product.id);

  if (foundedProduct) {
    copy.splice(copy.indexOf(foundedProduct), 1, {
      ...foundedProduct,
      count: foundedProduct.count + 1,
    });
  } else {
    copy.push({ ...product, count: 1 });
  }
  return copy;
};

const removeProduct = (id: number, state: BasketModel) => {
  let copy = state.products.slice();
  let foundedProduct = copy.find((pr) => pr.id === id);
  if (foundedProduct) copy.splice(copy.indexOf(foundedProduct), 1);
  return copy;
};
