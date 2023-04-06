import { createAction } from "@reduxjs/toolkit";

let refHome = createAction(
    'refHome',
    ({reference}) => {
        return {
            payload: {
                reference: reference
            }
        }
    }
)

const refHomeActions = {refHome}
export default refHomeActions