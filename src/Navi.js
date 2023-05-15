import React from "react";
import { Link, useLocation} from "react-router-dom";

const Navi = () => {
const location = useLocation();  
  return (
    <div className="w-11/12 h-20 flex items-center text-[#707070] font-exo ">

      <div className="w-4/12 centered-items">
        <Link to='/'>
          <span className="orange font-bold text-2xl font-sans">Apply4Job</span>
        </Link>
      </div>
      
      <div className={`w-6/12 flex justify-base ${location.pathname === ('/login') || location.pathname ===('/signup')  ? 'hidden':'' }`}>
        <ul className="flex space-x-10 font-bold">
          <li className="hover:cursor-pointer hover:text-blue-400">Find Job</li>
          <li className="hover:cursor-pointer hover:text-blue-400">
            Company Application
          </li>
          <li className="hover:cursor-pointer hover:text-blue-400">
            Company Reviews
          </li>
        </ul>
      </div>

      <div className={`w-2/12 h-10 space-x-5 centered-items ${location.pathname === ('/login') || location.pathname ===('/signup')  ? 'hidden':'' }  `}>
        <Link to="/signup">
          <span className="font-bold border-r h-full centered-items pr-4 hover:orange hover:cursor-pointer">
            Sign Up
          </span>
        </Link>
        <Link to='/login'>
        <span className="font-bold text-blue-400 hover:orange hover:cursor-pointer">
          Login
        </span>
        </Link>
      </div>
     


    </div>
  );
};

export default Navi;
