import { Route, Routes } from "react-router";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navi from "./Navi";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-2">
        <Navi />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
