import "../css/HomeStyle.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="HomeContainer">
      <div id="homeTitle">타입 한입 HOME 🍉</div>
    </div>
  );
}

export default Home;
