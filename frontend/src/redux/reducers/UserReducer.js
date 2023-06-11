import { REDUX_USER_LOGOUT, REDUX_SET_USERDATA } from "../actions/actionTypes";
const INITIAL_STATE = {
  userData: {},
  isSendVertifyCode:false,
  
};
export const UserReducer = (state = INITIAL_STATE, action) => {
  console.log('girdi')
  switch (action.type) {
    case REDUX_SET_USERDATA:
        const {auth , user , lifesycle} = action.data;
        console.warn(action)
        if(auth && user)
        {
          localStorage.setItem("token", JSON.stringify(auth));
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("lifesycle", JSON.stringify(lifesycle));
        }
       
        return { 
          userData: action.data
        };
     case "SET_VERIFY_CODE_STATUS":
      return {
        ...state,
        isSendVertifyCode:action.isSendVertifyCode
      }


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
