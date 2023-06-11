import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { toast } from "react-toastify";
import { isMailValid } from "../utils";
import { toastMessage } from "../redux/actions/ToastMessageRequest";
import { userCheck } from "../redux/actions/UserCheck";
import { userSignUp } from "../redux/actions/UserSignUp";
import { UserReducer } from "../redux/reducers/UserReducer";
import { delay } from "redux-saga/effects";

const SignUp = (userData) => {
  const data = userData;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const vertifyNumber = useRef(null);
  const [seconds, setSeconds] = useState(23);
  const [isTimeExpired, setIsTimeExpired] = useState(false);
  const dispatch = useDispatch();
  const codeDiv = useRef(null);

  const isSendVerifyCode = useSelector(
    (state) => state.UserReducer.isSendVertifyCode
  );

  const handleGetCodeButtonClick = () => {
    if (!isTimeExpired) {
      console.warn("here");
      console.log("####2",emailRef.current.value)
      dispatch(
        userSignUp({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          ipAddress: data.ip,
          vertifyNumber: vertifyNumber.current.value
        })
      );
    } else {
      dispatch(
        userCheck({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          ipAddress: data.ip,
        })
      );
      setSeconds(25);
    }
  };

  useEffect(() => {
    let interval;
    if (isSendVerifyCode) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      handleVerifyTime(interval);
      codeDiv.current.className = "flex";
    }
    return () => clearInterval(interval);
  }, [isSendVerifyCode, seconds]);

  const handleVerifyTime = (interval) => {
    if (seconds <= 0) {
      console.log("akdaksdk");
      setIsTimeExpired(true);
      clearInterval(interval);
    } else setIsTimeExpired(false);
  };

  const handleClick = () => {
    if (
      isMailValid(emailRef.current?.value) &&
      typeof emailRef.current?.value === "string" &&
      passwordRef.current?.value &&
      data.ip
    ) {
      console.warn("here");
      dispatch(
        userCheck({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          ipAddress: data.ip,
        })
      );
      console.log("####",emailRef.current.value)
    } else
      dispatch(
        toastMessage({
          body: "Lütfen boş alan bırakmayınız.",
          isSuccess: false,
        })
      );
  };

  return (
    <div className="w-full centered-items mt-[5%] ">
      <div className="w-3/12 lg:w-4/12 md:w-6/12 sm:w-6/12 min-w-fit ">
        <div className="w-full p-4   shadow-xl   space-y-4">
          <div className="space-y-1">
            <div>
              <span className="font-bold text-3xl">Sign Up</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">
                Remain informed about your vocational realm.
              </span>
            </div>
          </div>
          <div ref={codeDiv} className="w-full flex hidden">
            <div className="bg-white w-9/12 h-full ">
              <div className="border-black border   justify-baseline items-center flex hover:border-orange-600 hover:border-2   w-full h-12 rounded-l-md">
                <input
                  ref={vertifyNumber}
                  placeholder="Enter the vertify code."
                  type="password"
                  className="w-9/12 h-2 p-4 text-gray-500 focus:outline-none"
                />
                <span className="w-3/12   flex items-center  justify-center hover:cursor-pointer text-sm text-orange-600">
                  {seconds}
                </span>
              </div>
            </div>
            <div
              onClick={() => handleGetCodeButtonClick()}
              className="w-3/12 text-white font-semibold hover:bg-orange-100 hover:shadow-xl hover:cursor-pointer hover:text-orange-400 bg-orange-400 border border-orange-400 rounded-r-lg flex justify-center items-center"
            >
              <span>{isTimeExpired ? "Get Code" : "Vertify"}</span>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="idValue" className="text-sm text-gray-500 ">
                E-mail
              </label>
            </div>
            <div>
              <input
                ref={emailRef}
                id="idValue"
                name="idValue"
                className="border-black border  p-5 text-gray-500  w-full h-12 rounded focus:outline-orange-600"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="">
              <label htmlFor="idValue" className="text-sm text-gray-500">
                Password
              </label>
            </div>

            <div className="bg-white h-full">
              <div className="border-black border   justify-baseline items-center flex hover:border-orange-600 hover:border-2   w-full h-12 rounded">
                <input
                  type="password"
                  ref={passwordRef}
                  className="w-9/12 h-2 p-4 text-gray-500 focus:outline-none"
                />
                <span className="w-3/12  bg-white flex items-center  justify-center hover:cursor-pointer text-sm text-orange-600">
                  Show
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={handleClick}
            className=" hover:cursor-pointer text-white bg-orange-400 hover:orange flex items-center hover:bg-orange-100 justify-center p-3 w-full  border border-orange-500 rounded-xl "
          >
            <span className="font-bold ">Sign Up</span>
          </div>

          <div className="space-y-5">
            <div className="w-full h-5 border-b  border-gray-300 text-2xl text-center ">
              <span className=" text-orange-400 bg-[#f3f2ef]  text-base  px-4 ">
                or
              </span>
            </div>
            <div className=" hover:cursor-pointer  flex  items-center hover:bg-orange-200 justify-center p-3 w-full  border border-orange-500 rounded-xl ">
              <span className="text-orange-400 font-bold">
                Continue with Google
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-6 justify-center text-gray-600 font-bold">
          <span className="">
            Do you have an <span className="text-orange-500">account? </span>
            <Link to="/login">
              <span className="hover:cursor-pointer hover:underline">
                Login!
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
