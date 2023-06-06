import { SAGA_LOGIN_REQUEST } from "./actionTypes"
export const loginRequest = (data) => {
    return {
      type: SAGA_LOGIN_REQUEST,
      payload:data
    };
  };
  

