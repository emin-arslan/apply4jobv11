import { REDUX_SET_LOGOUT, REDUX_SET_USERDATA } from "../actions/actionTypes";
const INITIAL_STATE = {
  userData: {},
  auth: "",
  lifesycle: false,
};
export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDUX_SET_USERDATA:
      if (action.data.result) {
        localStorage.setItem("token", JSON.stringify(action.data.auth));
        localStorage.setItem("user", JSON.stringify(action.data.user));
        localStorage.setItem("lifesycle", true);
        console.log(localStorage.getItem("user"));
        return {
          userData: action.data.user,
          auth: action.data.auth,
          lifesycle: action.data.lifesycle,
          result : true
        };
      } 
      else {
        return {
          result:false
        }
      }
    case REDUX_SET_LOGOUT:
      console.warn(action.data)
      if(action.data==='logout')
      {
        localStorage.clear();
      }
        
      return {}

    default:
      return state;
  }
};
