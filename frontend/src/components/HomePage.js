import React, { useRef, useState } from "react";
import pic from "../assets/export.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toastMessage } from "../redux/actions/ToastMessageRequest";
import { loginRequest } from "../redux/actions/UserLogin";

const HomePage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  let myTimeout;

  const changeDisabledStatus = () => {
    setIsDisabled(false);
    clearTimeout(myTimeout);
  };

  const dispatch = useDispatch();
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
    <div className="w-11/12 centered-items sm:mt-5  xl:w-full  justify-center  mt-12 lg:w-full md:w-full sm:w-full   ">
      <div className="w-4/12  space-y-5  sm:w-6/12  xl:w-6/12 lg:w-5/12 sm:min-w-[400px]   ">
        <div className="w-full  sm:w-full  sm:justify-center md:w-full flex justify-start    lg:w-full  lg:justify-start  ">
          <span className="w-full flex md:w-full md:justify-start lg:w-full  xl:justify-center xl:w-9/12  sm:w-8/12 sm:justify-start   text-4xl font-thin md:text-3xl lg:text-3xl xl:text-4xl sm:text-3xl  text-orange-800 ">
            Welcome to your <br />
            professional society
          </span>
        </div>

        <div className="w-11/12  sm:w-full md:w-full md:justify-start   xl:start xl:justify-center xl:w-9/12  lg:justify-start sm:justify-center   flex justify-start">
          <div className="w-8/12 sm:w-8/12 lg:w-8/12  xl:w-7/12 xl:justify-center md:w-11/12 ">
            <div className="w-full  ">
              <label htmlFor="idValue" className="text-sm text-gray-500 ">
                E-mail or Phone number
              </label>
            </div>
            <div className="w-full">
              <input
                ref={emailRef}
                id="idValue"
                name="idValue"
                className=" w-full  h-12 p-5 border-orange-400 border text-gray-500 rounded focus:outline-orange-600"
              ></input>
            </div>
          </div>
        </div>

        <div className="w-11/12 sm:w-full md:w-full md:justify-start   xl:w-9/12 xl:justify-center  sm:justify-center lg:justify-start  flex justify-start">
          <div className="w-8/12  sm:w-8/12 lg:w-8/12  xl:w-7/12  md:w-11/12 ">
            <div className="w-full ">
              <label htmlFor="idValue" className="text-sm text-gray-500">
                Password
              </label>
            </div>
            <div className="w-full">
              <input
                ref={passwordRef}
                type="password"
                id="idValue"
                name="idValue"
                className=" w-full h-12 p-5 border-orange-400 border text-gray-500 rounded focus:outline-orange-600"
              ></input>
            </div>
          </div>
        </div>

        <div className="w-11/12  sm:w-full md:w-full flex  justify-start lg:justify-start xl:w-9/12 xl:justify-center  sm:justify-center md:justify-start   ">
          <div className="w-8/12 sm:w-8/12 lg:w-9/12  w-7/12 flex md:w-11/12">
            <span className="text-l underline orange hover:text-orange-700 hover:cursor-pointer">
              Forgetten Password?
            </span>
          </div>
        </div>

        <div className="w-11/12  sm:w-full md:w-full md:justify-start lg:justify-start xl:w-9/12 xl:justify-center sm:justify-center flex justify-start ">
          <div onClick={handleLoginClick} className=" hover:cursor-pointer lg:w-8/12  xl:w-7/12  text-white flex items-center hover:bg-orange-400 justify-center  w-8/12 sm:w-8/12   md:w-11/12 bg-orange-500 rounded-xl h-10">
            <span className=" font-bold">Login</span>
          </div>
        </div>

        <div className="w-11/12 sm:w-full md:w-full md:justify-start  sm:justify-center xl:w-9/12 xl:justify-center lg:justify-start flex justify-start ">
          <div className="h-5 border-b border-orange-400 text-2xl sm:w-8/12  xl:w-7/12  lg:w-8/12 md:w-11/12 w-8/12 text-center">
            <span className="px-5 text-gray-400 bg-[#f3f2ef] text-base ">
              or
            </span>
          </div>
        </div>

        <div className="w-11/12 sm:w-full md:w-full md:justify-start lg:justify-start xl:w-9/12 xl:justify-center sm:justify-center flex justify-start ">
          <div className=" hover:cursor-pointer  flex items-center hover:bg-orange-100  xl:w-7/12  lg:w-8/12 justify-center  w-8/12 sm:w-8/12  md:w-11/12  border border-orange-500 rounded-xl h-10">
            <span className="text-orange-800 ">Continue with Google</span>
          </div>
        </div>
        <Link to="/signup">
          <div className="w-11/12 mt-3 sm:w-full md:w-full flex  lg:justify-start md:justify-start xl:w-9/12 xl:justify-center sm:justify-center  justify-start ">
            <div className=" hover:cursor-pointer  flex items-center hover:bg-orange-100 justify-center  xl:w-7/12  lg:w-8/12  w-8/12  sm:w-8/12  md:w-11/12 border border-orange-500 rounded-xl h-10">
              <span className="text-orange-800 ">
                Are you new? Join us Now!
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-6/12   flex justify-end  md:w-8/12 lg:w-7/12 xl:justify-end    xl:w-6/12  md:items-start  md:items-center  sm:hidden lg:justify-center">
        <img
          src={pic}
          className="w-[550px] min-w-[400px] lg:w-[500px] "
          alt="sa"
        />
      </div>
    </div>
  );
};

export default HomePage;
