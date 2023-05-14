import React from "react";
import pic from "./assets/export.png";

const HomePage = () => {
  return (
    <div className="w-11/12 flex items-center  pt-10  ">
      <div className="w-6/12 space-y-5  ">
        <div className="w-11/12 flex justify-center ">
          <span className="w-6/12  text-4xl font-thin  text-orange-800 ">
            Welcome to your <br /> professional society!
          </span>
        </div>

        <div className="w-11/12  flex justify-center">
          <div className="w-6/12  ">
            <div className="w-full ">
              <label htmlFor="idValue" className="text-sm text-gray-500 ">
                E-mail or Phone number
              </label>
            </div>
            <div className="w-full">
              <input
                id="idValue"
                name="idValue"
                className=" w-full h-12 p-5 border-orange-400 border text-gray-500 rounded focus:outline-orange-600"
              ></input>
            </div>
          </div>
        </div>

        <div className="w-11/12  flex justify-center">
          <div className="w-6/12  ">
            <div className="w-full ">
              <label htmlFor="idValue" className="text-sm text-gray-500">
                Password
              </label>
            </div>
            <div className="w-full">
              <input
                type="password"
                id="idValue"
                name="idValue"
                className=" w-full h-12 p-5 border-orange-400 border text-gray-500 rounded focus:outline-orange-600"
              ></input>
            </div>
          </div>
        </div>

        <div className="w-11/12 flex justify-center ">
          <div className="w-6/12">
            <span className="text-l underline orange hover:text-orange-700 hover:cursor-pointer">
              Forgetten Password ?
            </span>
          </div>
        </div>

        <div className="w-11/12 flex justify-center ">
          <div className=" hover:cursor-pointer  text-white flex items-center hover:bg-orange-400 justify-center  w-6/12   bg-orange-500 rounded-xl h-10">
            <span className=" font-bold">Login</span>
          </div>
        </div>

        <div className="w-11/12 flex justify-center ">
          <div className="h-5 border-b border-orange-400 text-2xl w-[22rem] text-center">
            <span className="px-5 text-gray-400  text-base bg-white">or</span>
          </div>
        </div>

        <div className="w-11/12 flex justify-center ">
        <div className=" hover:cursor-pointer  flex items-center hover:bg-orange-100 justify-center  w-6/12  border border-orange-500 rounded-xl h-10">
              <span className="text-orange-800 ">Continue with Google</span>
        </div>
        </div>

        <div className="w-11/12 flex justify-center ">
        <div className=" hover:cursor-pointer  flex items-center hover:bg-orange-100 justify-center  w-6/12  border border-orange-500 rounded-xl h-10">
              <span className="text-orange-800 ">Are you new? Join us Now!</span>
        </div>
        </div>

      </div>
      <div className="w-6/12">
      <img src={pic} className="w-9/12" alt="sa" />
      </div>
    </div>
  );
};

export default HomePage;
