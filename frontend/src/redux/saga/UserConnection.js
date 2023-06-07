import { REDUX_SET_USERDATA } from "../actions/actionTypes";
import { delay, put } from "redux-saga/effects";
import { tostMessageCheck } from "./ToastMessageCheck";
import history from "../../history";


export function* userLogin({ payload }) {
  const { email, password } = payload;
  let data = yield fetch("http://localhost:5000/login", {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = yield data.json();
  if (data.result) {
    yield put({ type: REDUX_SET_USERDATA, data });
    tostMessageCheck({ body: data.body, isSuccess: true });
    yield delay(2000)
    history.push("/")
    history.go();
    
  } else {
    tostMessageCheck({ body: data.body, isSuccess: false });
  }
}

export function* userCheck() {
  let result = yield fetch("http://localhost:5000/check", {
    method: "post",
    headers: {
      authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  result = yield result.json();
  if (result.result) {
    let user = JSON.parse(localStorage.getItem("user"));
    let auth = JSON.parse(localStorage.getItem("token"));
    let data = { user, auth, lifesycle: true };
    yield put({ type: REDUX_SET_USERDATA, data });
  } 
  else localStorage.setItem("lifesycle", false);
}

export function* userSignUp({ user }) {
  const { email, password, ipAddress } = user;
  let data =  yield fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, ipAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  data = yield data.json();
  if (data.result) {
    yield put({ type: REDUX_SET_USERDATA, data });
    
    tostMessageCheck({ body: data.body, isSuccess: true });
    yield delay(2000)
    history.push("/")
    history.go();
  } else {
    tostMessageCheck({ body: data.body, isSuccess: false });
  }
}
