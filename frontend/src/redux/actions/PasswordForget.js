import { NEW_PASSWORD_REQUEST } from "./actionTypes"


export const passwordRequest = (user) =>{
    return{
        type:NEW_PASSWORD_REQUEST,
        user
    }
}