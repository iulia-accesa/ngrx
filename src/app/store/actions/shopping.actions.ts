import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export const addItem = createAction(
  '[Shopping List] Add Item',
  props<{ item: ShoppingItem }>()
);
