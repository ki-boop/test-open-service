import { createReducer, on } from '@ngrx/store';
import { setActiveCategory, setCategories } from './categories.actions';
import { CategoryModelMenu } from 'src/app/model/category.model';

export const categoryState: CategoryModelMenu = new CategoryModelMenu(0);
export const activeCategoryId: number = 0;

export const categoryReducer = createReducer(
  categoryState,
  on(setCategories, (state, { categories }) => ({
    ...state,
    categories: categories,
  })),
  on(setActiveCategory, (state, { categoryId }) => ({
    ...state,
    activeCategory: categoryId,
  }))
);
