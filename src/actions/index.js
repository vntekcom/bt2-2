import * as types from "./../constants/ActionType";

//action creator
export const addToCart = product => {
  return {
    type: types.ADD_TO_CART,
    payload: { product, qty: 1 }
  };
};

export const subFromCart = product => {
  return {
    type: types.SUBTRACT_FROM_CARD,
    payload: { product, qty: 1 }
  };
};

export const delFromCart = product => {
  return {
    type: types.DELETE_FROM_CART,
    payload: product
  };
};
