import { SIGN_UP_REQUEST, USER_CHECK_REQUEST } from "./actionTypes"



export const userSignUp = (data) => {
    return {
        type:SIGN_UP_REQUEST,
        user:data
    }
    
}