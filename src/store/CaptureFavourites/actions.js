import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureFavourites = createAsyncThunk("captureShop", async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    let response = await axios.get(
      "https://lance-app.onrender.com/favourites/",
      headers
    );

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
