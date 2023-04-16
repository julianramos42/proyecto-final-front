import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureShop } = actions;

const initialState = {
  shop: [],
};

const reducer = createReducer(initialState, (builder) =>
  builder.addCase(captureShop.fulfilled, (state, action) => {
    const newState = {
      ...state,
      shop: action.payload.shop,
    };
    return newState;
  })
);

export default reducer;
