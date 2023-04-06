import { createAction } from "@reduxjs/toolkit";

let refContact = createAction(
    'refContact',
    ({reference}) => {
        return {
            payload: {
                reference: reference
            }
        }
    }
)

const refContactActions = {refContact}
export default refContactActions