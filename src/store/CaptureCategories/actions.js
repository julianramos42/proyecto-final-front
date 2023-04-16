
import { createAction  } from "@reduxjs/toolkit";

let captureCategories = createAction(
    "captureCategories",
    ({categories}) => {
        return { payload: {
            category: categories
        }}
    }
)

const actions = {captureCategories};
export default actions