import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const captureShop = createAsyncThunk(
  "captureShop",
  async ({ captureCategories, inputText }) => {
    try {
      const response = await axios.get(
        "https://lance-app.onrender.com/shop/" +
          "?name=" +
          inputText +
          "&category=" +
          captureCategories
      );
      return {
        shop: response.data.shops,
      };
    } catch (error) {
      console.log(error);
    }
    return {
      shop: [],
    };
  }
);

const actions = { captureShop };

export default actions;
