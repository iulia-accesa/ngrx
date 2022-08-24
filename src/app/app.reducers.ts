import { ActionReducerMap } from "@ngrx/store";
import * as fromShopping from './store/reducers/shopping.reducer';


export interface AppState{
    shoppingList:fromShopping.State
   };
   
export const appReducer: ActionReducerMap<AppState> = {
    shoppingList: fromShopping.ShoppingReducer
}