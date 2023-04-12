import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { captureFavourites } = actions;

const initialstate = {
  favourites: [],
};

const reducer = createReducer(initialstate, (builder) =>
  builder.addCase(captureFavourites.fulfilled, (state, action) => {
    let newState = {
      ...state,
      favourites: action.payload.favourites,
    };
    return newState;
  })
);

export default reducer