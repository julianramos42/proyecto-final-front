import { createAction } from "@reduxjs/toolkit";

let refCustomers = createAction(
    'refCustomers',
    ({reference}) => {
        return {
            payload: {
                reference: reference
            }
        }
    }
)

const refCustomersActions = {refCustomers}
export default refCustomersActions