import { createReducer, on } from '@ngrx/store';
import * as fromShoppingActions from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

export interface State {
  items: ShoppingItem[];
}

const defaultShoppingItem: ShoppingItem = {
  id: 'afsefsfse242353',
  name: 'Diet coke',
};
const initialState: State = {
  items: [defaultShoppingItem]
};


export const  ShoppingReducer = createReducer(
        initialState,

        on(fromShoppingActions.addItem,
            (state,action) => 
            {
                
              return {
                        ...state,
                        items: [...state.items,action.item]
                      }

                }
            )


);