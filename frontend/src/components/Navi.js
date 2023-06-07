import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogout } from "../redux/actions/UserLogout";
import { ReactComponent as Searchlogo } from "../assets/search.svg";
import { ReactComponent as LocationLogo } from "../assets/location.svg";
const Navi = () => {
  const user = useSelector((state) => state.UserReducer);
  const location = useLocation();
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispacth(userLogout());
    navigate("/");
  };
  return (
    <div className="w-11/12 h-20  flex items-center text-[#707070]  space-x-2 font-exo lg:w-full sm:justify-center sm:w-full  md:w-full ">
      <div className="w-4/12 lg:w-2/12 lg:justify-start sm:min-w-[400px]  h-full  centered-items ">
        <Link to="/">
          <span className="orange font-bold text-2xl font-sans  ">
            Apply4Job
          </span>
        </Link>
      </div>

      <div
        className="w-6/12 xl:w-5/12 lg:w-8/12  h-full centered-items  lg:centered-items md:w-full   sm:hidden flex justify-base"
          
      >
        {location.pathname === "/jobs" ? (
          <div className="flex space-x-5 items-center">
            <div className=" h-fit p-3 space-x-2 border-2 centered-items  border-orange-400 bg-[#F9F9F9] rounded">
              <span className="h-full  centered-items">
                <Searchlogo />
              </span>
              <input
                placeholder="Ünvan veya yetenek"
                className="h-full focus:outline-none bg-[#F9F9F9]    "
              />
            </div>

            <div className=" h-fit p-3 space-x-2 border-2 centered-items  border-orange-400 bg-[#F9F9F9] rounded">
              <span className="h-full  centered-items">
                <LocationLogo />
              </span>
              <input
                placeholder="Ünvan veya yetenek"
                className="h-full focus:outline-none  bg-[#F9F9F9]    "
              />
            </div>

            <div className="centered-items h-12 hover:cursor-pointer hover:bg-orange-400 hover:text-white border border-orange-400 w-28  text-orange-400 font-semibold rounded-xl">
              <span>Arama yap</span>
            </div>
          </div>
        ) : (
          <ul className="flex space-x-10 mt-1 sm:space-x-1 font-bold">
            <li className="hover:cursor-pointer hover:text-blue-400">
              Find Job
            </li>
            <li className="hover:cursor-pointer hover:text-blue-400">
              <Link to={"/jobs"}>Company Application</Link>
            </li>
            <li className="hover:cursor-pointer hover:text-blue-400">
              Company Reviews
            </li>
          </ul>
        )}
      </div>

      <div
        className={`w-4/12 md:w-4/12 lg:w-2/12  h-full  sm:hidden h-10 space-x-5 centered-items ${
          location.pathname === "/login" || location.pathname === "/signup"
            ? "hidden"
            : "visible"
        }  `}
      >
        {user.userData.lifesycle == true &&
        user.userData.lifesycle !== undefined ? (
          <span
            onClick={() => logOut()}
            className="font-bold border-r   h-12  mt-1 centered-items pr-4 hover:orange hover:cursor-pointer"
          >
            Log out
          </span>
        ) : (
          <Link to="/signup">
            <span className="font-bold border-r  h-full  mt-1 centered-items pr-4 hover:orange hover:cursor-pointer">
              Sign Up
            </span>
          </Link>
        )}
        {user.userData.lifesycle == true &&
        user.userData.lifesycle !== undefined ? (
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
