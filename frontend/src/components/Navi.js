import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogout } from "../redux/actions/UserLogout";

const Navi = () => {
  const user = useSelector((state)=> state.UserReducer)
  const location = useLocation();
  const dispacth = useDispatch()
  const navigate = useNavigate();
 
  const logOut = () =>{
    dispacth(userLogout())
    navigate('/')
  }
  return (
    <div className="w-11/12 h-20  flex items-center text-[#707070] space-x-2 font-exo lg:w-full sm:justify-center sm:w-full  md:w-full ">
      <div className="w-4/12 lg:w-2/12 lg:justify-start sm:min-w-[400px]  h-full  centered-items ">
        <Link to="/">
          <span className="orange font-bold text-2xl font-sans  ">
            Apply4Job
          </span>
        </Link>
      </div>

      <div
        className={`w-4/12 xl:w-5/12 lg:w-8/12  h-full centered-items  lg:centered-items md:w-full   sm:hidden flex justify-base
          `}
      >
        <ul className="flex space-x-10 mt-1 sm:space-x-1 font-bold">
          <li className="hover:cursor-pointer hover:text-blue-400">Find Job</li>
          <li className="hover:cursor-pointer hover:text-blue-400">
            <Link to={'/jobs'}>
              Company Application
            </Link>
            
          </li>
          <li className="hover:cursor-pointer hover:text-blue-400">
            Company Reviews
          </li>
        </ul>
      </div>

      <div
        className={`w-4/12 md:w-4/12 lg:w-2/12  h-full  sm:hidden h-10 space-x-5 centered-items ${
          location.pathname === "/login" || location.pathname === "/signup"
            ? "hidden"
            : "visible"
        }  `}
      >
        {user.userData.lifesycle  == true ? (
          <span onClick={()=>logOut()} className="font-bold border-r   h-12  mt-1 centered-items pr-4 hover:orange hover:cursor-pointer">
            Log out
          </span>
        ) : (
          <Link to="/signup">
            <span className="font-bold border-r  h-full  mt-1 centered-items pr-4 hover:orange hover:cursor-pointer">
              Sign Up
            </span>
          </Link>
        )}
        {user.userData.lifesycle == true ? (
          <span className="font-bold bg-orange-400 h-12  w-12 rounded-3xl text-white centered-items mt-1  hover:orange hover:cursor-pointer">
            E
          </span>
        ) : (
          <Link to="/login">
            <span className="font-bold text-blue-400 centered-items mt-1  hover:orange hover:cursor-pointer">
              Login
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navi;
