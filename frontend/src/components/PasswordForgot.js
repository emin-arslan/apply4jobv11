import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { passwordRequest } from '../redux/actions/PasswordForget';

const PasswordForgot = () => {
  const dispatch = useDispatch()
  const emailRef = useRef();
  const handleClick = () =>{
    dispatch(passwordRequest(emailRef.current.value))
  }
  return (
    <div className="w-full centered-items mt-[5%] ">
      <div className="w-3/12 lg:w-4/12 md:w-6/12 sm:w-6/12 min-w-fit">
        <div className="w-full p-4   shadow-xl   space-y-4">
          <div className="space-y-1">
            <div>
              <span className="font-bold text-3xl">Get New Password</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">
              Forgot your password? Click below for a new one via email.
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
              />
            </div>
          </div>

          <div onClick={handleClick} className=" hover:cursor-pointer text-white bg-orange-400 hover:text-orange-400 flex items-center hover:bg-orange-100 justify-center p-3 w-full  border border-orange-500 rounded-xl ">
            <span className="font-bold">Submit New Password</span>
          </div>

        </div>

        <div className="w-full flex mt-6 justify-center text-gray-600 font-bold">
          <span className="">
            Do you have an  <span className="text-orange-500">account? </span>
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
}

export default PasswordForgot
