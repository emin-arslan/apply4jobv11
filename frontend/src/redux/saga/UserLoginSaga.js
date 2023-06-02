import { REDUX_SET_USERDATA } from "../actions/actionTypes";
import { put } from "redux-saga/effects";

export function* UserLoginSaga({ payload }) {
  console.log(payload);
  const { email, password } = payload;
  let data = yield fetch("http://localhost:5000/login", {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = yield data.json();
  console.warn("saga data", data);
  if (data.result) {
    yield put({ type: REDUX_SET_USERDATA, data });
  } else {
    yield put({ type: REDUX_SET_USERDATA, data });
  }
}

export function* userCheckSaga() {
  let result = yield fetch("http://localhost:5000/check", {
    method: "post",
    headers: {
      authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  result = yield result.json();
  console.warn("sonuc", result.result);
  if (result.result) {
    console.log("true dondu");
    let user = JSON.parse(localStorage.getItem("user"));
    let auth = JSON.parse(localStorage.getItem("token"));
    let data = { user, auth, lifesycle: true, result: result.result };
    console.warn("data is here ", data);
    yield put({ type: REDUX_SET_USERDATA, data });
  } else {
    console.warn("girdi");
    localStorage.setItem("lifesycle", false);
  }
}
