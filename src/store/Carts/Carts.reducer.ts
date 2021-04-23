import { Action, ActionNumber } from "./Carts.types"

export interface User {
  fullName: string;
  email: string;
  password: string;
}

export interface UsersList {
  cart: Array<Object>;
};

const INITIAL_STATE: Array<Object> = [];

function addCartRedux(state: Array<Object> = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "ADD_CART":
      action.payload.cart.map((item, index, obj) => {
        state.push(item);
      })
      return state;

    // case "REMOVE_CART":
    //   // console.log("remove do cart:", state)
    //   state.forEach(function (item, index, obj) {
    //     if (index == 0) {
    //       console.log('YippeeeE!!!!!!!!!!!!!!!!')
    //       state.splice(index, 1);
    //     }
    //   });

    // let rest = state.filter((item, index, obj) => {
    //   return index != 0
    // })
    // state.push({ ...rest });
    // return state;

    default:
      return state
  }
}

function removeCartRedux(state: Array<Object> = INITIAL_STATE, action: ActionNumber) {

  switch (action.type) {
    case "REMOVE_CART":
      // let value = state.filter((item, index, obj) => {
      //   return index !== action.payload
      // })
      // state.push(value);

      state.forEach(function (item, index, obj) {
        if (index == action.payload) {
          console.log("removeState:", action.payload)
          state.splice(index, 1);
        }
      });

      return state;

    default:
      return state
  }
}

export {
  addCartRedux,
  removeCartRedux
}