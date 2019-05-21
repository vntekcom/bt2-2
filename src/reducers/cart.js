import * as types from "../constants/ActionType";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
          if (state[i].product.id === action.payload.product.id) {
            state[i].qty += 1;
            return [...state];
          }
        }
      }
      state.push(action.payload);
      return [...state];

    case types.SUBTRACT_FROM_CARD:
      if (state.length > 0) {
        for (var j = 0; j < state.length; j++) {
          if (state[j].product.id === action.payload.product.id) {
            state[j].qty -= 1;
            if (state[j].qty <= 0) {
              const index = state.findIndex(item => item.id === action.payload);
              state.splice(index, 1);
              return [...state];
            }
            return [...state];
          }
        }
      }
      state.push(action.payload);
      return [...state];

    case types.DELETE_FROM_CART:
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
      return [...state];

    default:
      return [...state];
  }
};

export default cartReducer;
