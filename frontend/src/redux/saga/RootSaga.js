import { put, takeEvery, all } from "redux-saga/effects";
import {UserLoginSaga, userCheckSaga} from "./UserLoginSaga";
import { SAGA_LOGIN_REQUEST, SAGA_USER_CHECK, SIGN_UP_REQUEST } from "../actions/actionTypes";
import { userSignUp } from "./UserSignUpSaga";
export default function* rootSaga() {
    yield all([
      takeEvery(SAGA_LOGIN_REQUEST, UserLoginSaga),
      takeEvery(SAGA_USER_CHECK,userCheckSaga),
      takeEvery(SIGN_UP_REQUEST,userSignUp)
    ]);
  }