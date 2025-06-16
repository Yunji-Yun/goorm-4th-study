import "../css/StartStyle.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div className="StartContainer">
      <div id="startTitle">타입한입{"\n"}다이어리</div>
      <div id="goToLoginPageBtn" onClick={() => navigate("/login")}>
        로그인하러 가기
      </div>
    </div>
  );
}

export default Start;
