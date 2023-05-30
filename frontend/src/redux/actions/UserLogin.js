import { SAGA_LOGIN_REQUEST } from "./actionTypes"
export const loginRequest = (data) => {
  console.log('working on it')
    return {
      type: SAGA_LOGIN_REQUEST,
      payload:data
    };
  };
  

