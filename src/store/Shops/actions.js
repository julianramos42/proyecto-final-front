import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureShop = createAsyncThunk("captureShop", async () => {
  try {
    let response = await axios.get(`http://localhost:8080/shop/`);

    return {
      shop: response.data.shops,
    };
  } catch (error) {
    console.log(error);
    return {
      shop: [],
    };
  }
});

const actions = { captureShop };
export default actions;


