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

export function* checkConnection() {
  let result = yield fetch("http://localhost:5000/checkconnection", {
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

export function* userCheck({ user }) {
  console.warn("we are here", user)
  const { email, password, ipAddress } = user;
  let data =  yield fetch("http://localhost:5000/checkuser", {
      method: "POST",
      body: JSON.stringify({ email, password, ipAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  data = yield data.json();
  if (data.result) {
    data.isSendVertifyCode = true
    yield put({ type: REDUX_SET_USERDATA, data });
    yield put({ type: "SET_VERIFY_CODE_STATUS",isSendVertifyCode:data.isSendVertifyCode });
    tostMessageCheck({ body: data.body, isSuccess: true });

  } else {
    tostMessageCheck({ body: data.body, isSuccess: false });
  }
}

export function* userSignUp ( {user}){
  console.warn("we are here",user)
  const { email, password, ipAddress,vertifyNumber } = user;
  let data =  yield fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, ipAddress,vertifyNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  data = yield data.json();
  if (data.result) {
    yield put({ type: REDUX_SET_USERDATA, data });
    tostMessageCheck({body:data.body,isSuccess:true})
    yield delay(2000)
    history.push("/")
    history.go();
  }
  else {
    tostMessageCheck({ body: data.body, isSuccess: false });
  }
  
}
