import { Route, Routes } from "react-router";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navi from "./Navi";
import SignUp from "./SignUp";
import Login from "./Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div className="md:container lg:container xl:container 2xl:container 3xl:container md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto 3xl:mx-auto sm:w-full p-2">
        <Navi />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
