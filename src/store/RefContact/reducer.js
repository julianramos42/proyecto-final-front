import { createReducer } from "@reduxjs/toolkit";
import refContactActions from "./actions";

const {refContact} = refContactActions

const initialState = {
    state: ''
}

const refContactReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            refContact,
            (state,action) => {
                let newState = {
                    ...state,
                    reference: action.payload.reference
                }
                return newState
            }
        )
)

export default refContactReducer