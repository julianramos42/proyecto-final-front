import { createAction } from "@reduxjs/toolkit";

let refAbout = createAction(
    'refAbout',
    ({reference}) => {
        return {
            payload: {
                reference: reference
            }
        }
    }
)

const refAboutActions = {refAbout}
export default refAboutActions