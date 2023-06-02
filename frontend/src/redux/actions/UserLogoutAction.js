import { REDUX_SET_LOGOUT } from "./actionTypes"
export const userLogout = (data) => {
  console.log('working on it')
    return {
      type: REDUX_SET_LOGOUT,
      data:data
    };
  };
  
