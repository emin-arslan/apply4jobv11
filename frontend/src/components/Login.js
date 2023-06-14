import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/UserLogin";
import { userLogout } from "../redux/actions/UserLogout";
import { delay } from "redux-saga/effects";
import { toastMessage } from "../redux/actions/ToastMessageRequest";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  let myTimeout;

  let getResult = useSelector((state) => state.UserReducer.result);

  const changeDisabledStatus = () => {
    setIsDisabled(false);
    clearTimeout(myTimeout);
  };

  const handleLoginClick = () => {
    if (isDisabled) {
      dispatch(
        toastMessage({
          body: "3 sn bekleyin veya bilgilerinizi değiştirin.",
          isSuccess: false,
        })
      );
    } else {
      let signUpData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      if (!signUpData.email || !signUpData.password) {
        dispatch(
          toastMessage({
            body: "Boş alan bırakmayınız",
            isSuccess: false,
          })
        );
        setIsDisabled(true);
        myTimeout = setTimeout(changeDisabledStatus, 3000);
      } else {
        dispatch(
          loginRequest({
            email: signUpData.email,
            password: signUpData.password,
          })
        );
        setIsDisabled(true);
        myTimeout = setTimeout(changeDisabledStatus, 3000);
      }
    }
  };
  return (
    <div className="w-full centered-items mt-[5%] ">
      <div className="w-3/12 lg:w-4/12 md:w-6/12 sm:w-6/12 min-w-fit">
        <div className="w-full p-4   shadow-xl   space-y-4">
          <div className="space-y-1">
            <div>
              <span className="font-bold text-3xl">Login</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">
                Keep up-to-date with your professional world.
              </span>
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="emailBox"
                id="emailBox"
                className="text-sm text-gray-500 "
              >
                E-mail
              </label>
            </div>

            <div className="">
              <input
                ref={emailRef}
                id="emailBox"
                name="emailBox"
                className="border-black border p-5 text-gray-500  w-full h-12 rounded focus:outline-orange-600"
                onChange={() => {
                  changeDisabledStatus();
                }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="">
              <label
                htmlFor="passwordBox"
                id="passwordBox"
                className="text-sm text-gray-500"
              >
                Password
              </label>
            </div>

            <div className="bg-white" id="passwordBox">
              <div className="border-black border justify-baseline items-center flex hover:border-orange-600 hover:border-2 p-1  w-full h-12 rounded">
                <input
                  type="password"
                  ref={passwordRef}
                  className="w-9/12 h-10 p-4 text-gray-500 focus:outline-none"
                  onChange={() => {
                    changeDisabledStatus();
                  }}
                />
                <span
                  onClick={() => {
                    if (isShown) {
                      passwordRef.current.type = "password";
                    } else {
                      passwordRef.current.type = "text";
                    }
                    setIsShown(!isShown);
                  }}
                  className="w-3/12 flex items-center justify-center hover:cursor-pointer text-sm text-orange-600"
                >
                  {isShown ? "Hide" : "Show"}
                </span>
              </div>
            </div>
            <div className=" w-10/12  flex ">
              <Link to={"/forgotpassword"}>
                <span className="text-l hover:underline text-orange-500 hover:text-orange-600 hover:cursor-pointer">
                  Forgetten Password
                </span>
              </Link>
            </div>
          </div>

          <div
            onClick={handleLoginClick}
            className=" hover:cursor-pointer text-white bg-orange-400 hover:text-orange-400 flex items-center hover:bg-orange-100 justify-center p-3 w-full  border border-orange-500 rounded-xl "
          >
            <span className="font-bold">Login</span>
          </div>

          <div className="space-y-5">
            <div className="w-full h-5 border-b  border-gray-300 text-2xl text-center mb-4">
              <span className=" text-orange-400 bg-[#f3f2ef]  text-base px-4 ">
                or
              </span>
            </div>
            <div className=" hover:cursor-pointer  flex  items-center hover:bg-orange-200 justify-center p-3 w-full  border border-orange-500 rounded-xl ">
              <span className="text-orange-400 font-bold">
                Login with Google
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-6 justify-center text-gray-600 font-bold">
          <span className="">
            Are you new at <span className="text-orange-500">Apply4Job? </span>
            <Link to="/signup">
              <span className="hover:cursor-pointer hover:underline">
                Join us!
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
