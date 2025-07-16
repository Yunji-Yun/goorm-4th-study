import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Start from "./page/Start";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Write from "./page/Write";
import Diary from "./page/Diary";
import Edit from "./page/Edit";
import { DiaryProvider } from "./context/DiaryContext";

import BottomImgDefault from "./img/bottomImg2.png";
import BottomImg from "./img/bottomImg.png";

function App() {
  const location = useLocation();
  const { pathname } = location;

  let bottomImgSrc = BottomImgDefault;

  if (pathname === "/login") {
    bottomImgSrc = BottomImg;
  } else if (pathname === "/") {
    bottomImgSrc = BottomImg;
  } else if (pathname === "/signup") {
    bottomImgSrc = BottomImg;
  }

  return (
    <DiaryProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <img id="bottomImg" src={bottomImgSrc} alt="하단 이미지" />
      </div>
    </DiaryProvider>
  );
}

export default App;
