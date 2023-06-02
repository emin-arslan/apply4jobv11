import { put, takeEvery, all } from "redux-saga/effects";
import {UserLoginSaga, userCheckSaga} from "./UserLoginSaga";
import { SAGA_LOGIN_REQUEST, SAGA_USER_CHECK } from "../actions/actionTypes";
export default function* rootSaga() {
    yield all([
      takeEvery(SAGA_LOGIN_REQUEST, UserLoginSaga),
      takeEvery(SAGA_USER_CHECK,userCheckSaga)
    ]);
  }