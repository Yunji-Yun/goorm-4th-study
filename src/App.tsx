import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./page/Start";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import BottomImg from "./img/bottomImg.png";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <img id="bottomImg" src={BottomImg} alt="하단 이미지"></img>
    </div>
  );
}

export default App;
