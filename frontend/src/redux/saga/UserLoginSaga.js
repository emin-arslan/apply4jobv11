import { REDUX_SET_USERDATA } from "../actions/actionTypes";
import { put } from "redux-saga/effects";

export default function* UserLoginSaga({payload})
{
     const {email,password} = payload;
     let data = yield fetch("http://localhost:5000/login",{
          method: "post",
          body: JSON.stringify({email,password}),
          headers: {
            "Content-Type": "application/json",
          },
     });
     data = yield data.json();
     yield put({type:REDUX_SET_USERDATA,data});
     
}