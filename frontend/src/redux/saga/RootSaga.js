import { put, takeEvery, all, take } from "redux-saga/effects";
import { userLogin, userCheck, userSignUp } from "./UserConnection";
import {
  SAGA_LOGIN_REQUEST,
  SAGA_USER_CHECK,
  SIGN_UP_REQUEST,
  TOAST_MESSAGE_REQUEST,
} from "../actions/actionTypes";
import { tostMessageCheck } from "./ToastMessageCheck";
export default function* rootSaga() {
  yield all([
    takeEvery(SAGA_LOGIN_REQUEST, userLogin),
    takeEvery(SAGA_USER_CHECK, userCheck),
    takeEvery(TOAST_MESSAGE_REQUEST, tostMessageCheck),
    takeEvery(SIGN_UP_REQUEST, userSignUp),
  ]);
}
