import { ArrayObjects } from "./Carts.types"

export function addCart(item: ArrayObjects) {
  return {
    type: "ADD_CART",
    payload: item,
  };
}
export function removeCart(item: number) {
  return {
    type: "REMOVE_CART",
    payload: item,
  };
}