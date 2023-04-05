import { createReducer } from "@reduxjs/toolkit";
import refCustomersActions from "./actions";

const {refCustomers} = refCustomersActions

const initialState = {
    state: ''
}

const refCustomersReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            refCustomers,
            (state,action) => {
                let newState = {
                    ...state,
                    reference: action.payload.reference
                }
                return newState
            }
        )
)

export default refCustomersReducer