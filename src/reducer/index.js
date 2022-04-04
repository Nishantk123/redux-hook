import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { ProductReducer } from "./ProductReducer";
import { UserReducer } from "./UserReducer";

export const reducers = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  cart: CartReducer

});
