import { SIGN_UP_REQUEST, USER_CHECK_REQUEST } from "./actionTypes"



export const userCheck = (data) => {
    return {
        type:USER_CHECK_REQUEST,
        user:data
    }
    
}