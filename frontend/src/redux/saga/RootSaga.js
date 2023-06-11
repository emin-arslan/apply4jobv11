import { put, takeEvery, all, take } from "redux-saga/effects";
import { userLogin, userCheck, userSignUp, checkConnection } from "./UserConnection";
import {
  SAGA_LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  TOAST_MESSAGE_REQUEST,
  USER_CHECK_REQUEST,
  USER_CONNECTION_CHECK,
} from "../actions/actionTypes";
import { tostMessageCheck } from "./ToastMessageCheck";
export default function* rootSaga() {
  yield all([
    takeEvery(SAGA_LOGIN_REQUEST, userLogin),
    takeEvery(USER_CONNECTION_CHECK, checkConnection),
    takeEvery(TOAST_MESSAGE_REQUEST, tostMessageCheck),
    takeEvery(USER_CHECK_REQUEST, userCheck),
    takeEvery(SIGN_UP_REQUEST,userSignUp)
  ]);
}
