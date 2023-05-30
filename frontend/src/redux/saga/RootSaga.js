import { put, takeEvery, all } from "redux-saga/effects";
import UserLoginSaga from "./UserLoginSaga";
import { SAGA_LOGIN_REQUEST } from "../actions/actionTypes";
export default function* rootSaga() {
    yield all([
      takeEvery(SAGA_LOGIN_REQUEST, UserLoginSaga),
    ]);
  }