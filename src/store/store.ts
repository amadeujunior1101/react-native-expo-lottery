import { createStore, combineReducers } from "redux";
import { addCartRedux, removeCartRedux } from "./Carts/Carts.reducer";

const rootReducer = combineReducers({
  cart: addCartRedux,
  items: removeCartRedux,
});

const store = createStore(rootReducer);

export default store;
