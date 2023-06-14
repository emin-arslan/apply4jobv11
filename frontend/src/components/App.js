import { Route, Routes } from "react-router";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navi from "./Navi";
import SignUp from "./SignUp";
import Login from "./Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateComponent from "./PrivateComponent";
import JobsPage from "./JobsPage";
import { useDispatch, useSelector } from "react-redux";
import { UserConnectionCheck } from "../redux/actions/UserConnectionCheck";
import { useEffect, useState } from "react";
import axios from "axios";
import history from "../history";
import { delay } from "redux-saga/effects";
import PasswordForgot from "./PasswordForgot";
import HamburgerMenu from "./HamburgerMenu";
import { useLocation } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [ip, setIP] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };
  useEffect((e) => {
    getData();
    if (
      user &&
      token &&
      user !== undefined &&
      token !== undefined &&
      user !== "" &&
      token !== ""
    )
      dispatch(UserConnectionCheck());
  }, []);
  const userData = useSelector((state) => state.UserReducer);
  return (
    <div className="App min-w-[400px]">
      <div className="md:container   lg:container xl:container 2xl:container 3xl:container md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto 3xl:mx-auto sm:w-full p-2">
        <Navi />
        {/* {location.pathname === "/jobs" && windowWidth < 768 ? (
          <HamburgerMenu />
        ) : undefined} */}
        <Routes history={history}>
          <Route
            element={
              <PrivateComponent
                lifesycle={
                  userData.userData.lifesycle !== undefined &&
                  userData.userData.lifesycle
                }
              />
            }
          >
            <Route path="/jobs" element={<JobsPage />} />
          </Route>
          <Route path="/forgotpassword" element={<PasswordForgot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp ip={ip} />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
