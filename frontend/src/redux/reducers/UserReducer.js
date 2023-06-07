import { REDUX_USER_LOGOUT, REDUX_SET_USERDATA } from "../actions/actionTypes";
const INITIAL_STATE = {
  userData: {},
};
export const UserReducer = (state = INITIAL_STATE, action) => {
  console.log('girdi')
  switch (action.type) {
    case REDUX_SET_USERDATA:
        console.warn(action)
        localStorage.setItem("token", JSON.stringify(action.data.auth));
        localStorage.setItem("user", JSON.stringify(action.data.user));
        localStorage.setItem("lifesycle", JSON.stringify(action.data.lifesycle));
        return { 
          userData: action.data
        };
    case REDUX_USER_LOGOUT:
      if(action.data==='logout')
      {
        localStorage.clear();
      }
        
      return { userData: {}};

    default:
      return state;
  }
};
