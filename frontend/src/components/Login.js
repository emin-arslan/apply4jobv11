import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sendLoginData = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)
  };

  const handleLoginClick = () => {
    let textBox = "";
    if (!email || !password) {
      if (!email && !password) {
        document.getElementById("emailBox").className =
          "text-red-600 font-bold ";
        document.getElementById("passwordBox").className =
          "text-red-600 font-bold ";
      } else if (!email) {
        textBox = document.getElementById("emailBox");
        textBox.className += " text-red-600 font-bold ";
        document.getElementById("passwordBox").className =
          "text-sm text-gray-500 ";
      } else if (!password) {
        textBox = document.getElementById("passwordBox");
        document.getElementById("emailBox").className =
          "text-sm text-gray-500 ";
        textBox.className = " text-red-600 font-bold ";
      }
      toast("Boş alan bırakmayınız", {
        autoClose: 1000,
        theme: "colored",
        type: "error",
      });
    } else {
      document.getElementById("emailBox").className = "text-sm text-gray-500 ";
      document.getElementById("passwordBox").className =
        "text-sm text-gray-500 ";
        
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
                Keep up-to-date with your professional world
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
                id="emailBox"
                name="emailBox"
                className="border-black border p-5 text-gray-500  w-full h-12 rounded focus:outline-orange-600"
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="" id="passwordBox">
              <div className="border-black border justify-baseline items-center flex hover:border-orange-600 hover:border-2 p-1  w-full h-12 rounded">
                <input
                  className="w-9/12 h-10 p-4 text-gray-500 focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="w-3/12 flex items-center justify-center hover:cursor-pointer text-sm text-orange-600">
                  Show
                </span>
              </div>
            </div>
            <div className=" w-10/12  flex ">
              <span className="text-l hover:underline text-orange-500 hover:text-orange-600 hover:cursor-pointer">
                Forgetten Password
              </span>
            </div>
          </div>

          <div
            onClick={sendLoginData}
            className=" hover:cursor-pointer text-white bg-orange-400 hover:text-orange-400 flex items-center hover:bg-orange-100 justify-center p-3 w-full  border border-orange-500 rounded-xl "
          >
            <span className="font-bold">Login</span>
          </div>

          <div className="space-y-5">
            <div className="w-full h-5 border-b  border-gray-300 text-2xl text-center mb-4">
              <span className=" text-orange-400 text-base bg-white px-4 ">
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
