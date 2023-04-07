import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureShop } = actions;

const initialstate = {
  shop: [],
};

const reducer = createReducer(initialstate, (builder) =>
  builder.addCase(captureShop.fulfilled, (state, action) => {
    let newState = {
      ...state,
      shop: action.payload.shop,
    };
    return newState;
  })
);

export default reducer