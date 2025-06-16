import "../css/LoginStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.id === id && user.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("로그인 성공!");
        navigate("/home");
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    } else {
      alert("가입된 계정이 없습니다.");
    }
  };

  return (
    <div className="LoginContainer">
      <div id="LoginBox">
        <div id="loginTitle">로그인</div>
        <form className="loginForm" onSubmit={handleLogin}>
          <input
            id="loginId"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            id="loginPw"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button id="loginBtn" type="submit">
            로그인
          </button>
          <div id="noAccountBox">
            <div id="noAccText">계정이 없으신가요?</div>
            <div id="goToSignupBtn" onClick={() => navigate("/signup")}>
              회원가입하기
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
