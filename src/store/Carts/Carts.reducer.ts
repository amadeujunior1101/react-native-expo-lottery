import { Action } from "./Carts.types"

const INITIAL_STATE: Array<Object> = [];

export default function (state: Array<Object> = INITIAL_STATE, action: Action) {

  switch (action.type) {
    case "ADD_CART":
      action.payload.cart.map((item, index, obj) => {
        state.push(item);
      })

      return state;

    case "REMOVE_CART":

      let index = state.findIndex((item, index: any, obj) => index === action.payload);

      let listItems = [...state];

      listItems.splice(index, 1);

      state = listItems;

      return state

    default:
      return state
  }
}

