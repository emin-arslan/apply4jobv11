import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/dist";
import { userSignUp } from "../redux/actions/UserSignAction";

const SignUp = (userData) => {
  const data = userData

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(userSignUp({email:emailRef.current.value,password:passwordRef.current.value,ipAddress:data.ip}))
  }

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
              Make the most of professional life
            </span>
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

            <div className="">
              <div className="border-black border justify-baseline items-center flex hover:border-orange-600 hover:border-2 p-1  w-full h-12 rounded">
                <input 
                type="text"
                ref={passwordRef}
                className="w-9/12 h-10 p-4 text-gray-500 focus:outline-none" />
                <span className="w-3/12 flex items-center justify-center hover:cursor-pointer text-sm text-orange-600">
                  Show
                </span>
              </div>
            </div>
          </div>

          <div 
          onClick={handleClick}
          className=" hover:cursor-pointer text-white bg-orange-400 hover:orange flex items-center hover:bg-orange-100 justify-center p-3 w-full  border border-orange-500 rounded-xl ">
            <span className="font-bold ">Sign Up</span>
          </div>

          <div className="space-y-5">
            <div className="w-full h-5 border-b  border-gray-300 text-2xl text-center ">
              <span className=" text-orange-400 text-base bg-white px-4 ">
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
