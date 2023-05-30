import { REDUX_SET_USERDATA } from "../actions/actionTypes";


const INITIAL_STATE = {
  userData: {  },
  auth:""
};
export const UserReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case REDUX_SET_USERDATA:
      console.log('redux works in case')
        return { userData : action.data.user, auth:action.data.auth }
    default:
      return state;
  }
};
