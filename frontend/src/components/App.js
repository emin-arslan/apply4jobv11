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
import { useDispatch } from "react-redux";
import { userCheck } from "../redux/actions/UserCheckAction";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  useEffect(() => {
    if (
      user &&
      token &&
      user !== undefined &&
      token !== undefined &&
      user !== "" &&
      token !== ""
    )
      dispatch(userCheck());
    console.log("this is working app user", user);
  }, []);

  console.log("tetiklendi");
  return (
    <div className="App">
      <div className="md:container lg:container xl:container 2xl:container 3xl:container md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto 3xl:mx-auto sm:w-full p-2">
        <Navi />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/jobs" element={<JobsPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
