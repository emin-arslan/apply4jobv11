import { SIGN_UP_REQUEST } from "./actionTypes"



export const userSignUp = (data) => {
    return {
        type:SIGN_UP_REQUEST,
        data
    }
    
}