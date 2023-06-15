import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { PageController } from "./PageControllerReducer"
export default combineReducers({
  UserReducer,
  PageController,
});
  