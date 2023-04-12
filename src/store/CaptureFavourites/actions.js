import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureFavourites = createAsyncThunk("captureShop", async () => {
  try {

    
    let response

    return {
      favourites: response.data.favourites,
    };
  } catch (error) {
    console.log(error);
    return {
      favourites: [],
    };
  }
});

const actions = { captureFavourites };
export default actions;
