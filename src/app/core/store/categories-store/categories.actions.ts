import { createAction, props } from '@ngrx/store';
import { CategoryModel } from 'src/app/model/category.model';

export const setCategories = createAction(
  'setCategories',
  props<{ categories: CategoryModel[] }>()
);
export const setActiveCategory = createAction(
  'setActiveCategory',
  props<{ categoryId: number }>()
);
