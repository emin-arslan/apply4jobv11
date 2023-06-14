import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/UserLogout";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Searchlogo } from "../assets/search.svg";
import { ReactComponent as LocationLogo } from "../assets/location.svg";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const searchDivAbility = useRef();
  const searchDivLocation = useRef();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const logOut = () => {
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <div
      className={`hamburger-menu  -mt-5  w-full   h-10 float-right items-center justify-end flex ${
        isOpen ? "open" : ""
      }`}
    >
      <ul
        className={`menu-items     justify-start space-x-2 items-center w-full  ${
          isOpen ? "flex" : "hidden"
        }`}
      >
         <li className=" w-15 min-w-fit">
          <span
          onClick={() => logOut()}
          className="font-bold flex w-full  text-gray-500  text-xs font-exo justify-start items-center    h-10   hover:orange hover:cursor-pointer"
        >
          Log out
        </span>
        </li>
        <li className="w-4/12  h-full flex min-w-fit  justify-center ">
          <div
            ref={searchDivAbility}
            className=" h-fit border-b-2  centered-items  border-orange-400 bg-[#F9F9F9] rounded"
          >
            <span className="h-full  centered-items">
              <Searchlogo />
            </span>
            <input
              onFocus={() => {
                searchDivAbility.current.classList.remove("border-orange-400");
                searchDivAbility.current.classList.add("border-blue-400");
              }}
              onBlur={() => {
                searchDivAbility.current.classList.remove("border-blue-400");
                searchDivAbility.current.classList.add("border-orange-400");
              }}
              placeholder="Ünvan veya yetenek"
              className="h-full w-full text-sm focus:outline-none bg-[#F9F9F9]    "
            />
          </div>
        </li>
        <li className="w-4/12 flex justify-center   ">
          <div
            ref={searchDivLocation}
            className=" h-fit border-b-2  centered-items  border-orange-400 bg-[#F9F9F9] rounded"
          >
            <span className="h-full  centered-items">
              <LocationLogo />
            </span>
            <input
              onFocus={() => {
                searchDivLocation.current.classList.remove("border-orange-400");
                searchDivLocation.current.classList.add("border-blue-400");
              }}
              onBlur={() => {
                searchDivLocation.current.classList.remove("border-blue-400");
                searchDivLocation.current.classList.add("border-orange-400");
              }}
              placeholder="Location, city etc."
              className="h-full focus:outline-none w-full text-sm bg-[#F9F9F9]    "
            />
          </div>
        </li>
        <li className="w-3/12 centered-items  min-w-fit">
            <div className="centered-items min-w-fit w-10/12 text-sm  hover:cursor-pointer hover:bg-orange-400 hover:text-white border border-orange-400   text-orange-400 font-semibold rounded-xl">
              <span>Arama yap</span>
            </div>
        </li>
       
        
      </ul>
      <div
        className="hamburger-icon   flex flex-col justify-between w-4 h-4 cursor-pointer"
        onClick={handleMenuToggle}
      >
        <span
          className={`w-full h-0.5 bg-orange-400 transition-transform  transition-opacity origin-top-left duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-orange-400 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-orange-400 transition-transform transition-opacity origin-bottom-left duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
