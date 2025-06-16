import "../css/SignupStyle.css";
import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    id: "",
    password: "",
    passwordCheck: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validate = (field: string, value: string) => {
    if (value.trim() === "") {
      return `${getFieldLabel(field)}을(를) 입력해 주세요.`;
    }

    switch (field) {
      case "id":
        if (!/^[a-zA-Z0-9]{6,12}$/.test(value)) {
          return "6-12자의 영문, 숫자를 사용해 주세요.";
        }
        break;
      case "password":
        if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/.test(value)) {
          return "8-16자의 영문, 숫자, 특수문자를 모두 사용해 주세요.";
        }
        break;
      case "passwordCheck":
        if (value !== password) {
          return "비밀번호가 일치하지 않습니다.";
        }
        break;
    }

    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "id":
        setId(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordCheck":
        setPasswordCheck(value);
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  };

  const getFieldLabel = (fieldName: string) => {
    switch (fieldName) {
      case "name":
        return "이름";
      case "id":
        return "아이디";
      case "password":
        return "비밀번호";
      case "passwordCheck":
        return "비밀번호 확인";
      default:
        return "";
    }
  };

  useEffect(() => {
    const allFieldsFilled = name && id && password && passwordCheck;
    const allErrorsEmpty = Object.values(errors).every((e) => e === "");

    setIsFormValid(Boolean(allFieldsFilled && allErrorsEmpty));
  }, [name, id, password, passwordCheck, errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { name, id, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("회원가입 성공!");
    navigate("/login");
  };

  return (
    <div className="SignupContainer">
      <div id="SignupBox">
        <div id="signupTitle">회원가입</div>
        <form className="signupForm" onSubmit={handleSubmit}>
          <div className="formBox">
            <div className="formBoxL">
              <div className="inputBox">
                <input
                  id="signupName"
                  name="name"
                  placeholder="이름"
                  value={name}
                  onChange={handleChange}
                  className={errors.name ? "inputError inputTextError" : ""}
                />
                <div
                  className="errorMsg"
                  style={{ visibility: errors.name ? "visible" : "hidden" }}
                >
                  {errors.name || " "}
                </div>
              </div>
              <div className="inputBox">
                <input
                  id="signupId"
                  name="id"
                  placeholder="아이디"
                  value={id}
                  onChange={handleChange}
                  className={errors.id ? "inputError inputTextError" : ""}
                />
                <div
                  className="errorMsg"
                  style={{ visibility: errors.id ? "visible" : "hidden" }}
                >
                  {errors.id || " "}
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="formBoxR">
              <div className="inputBox">
                <input
                  id="signupPw"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handleChange}
                  className={errors.password ? "inputError inputTextError" : ""}
                />
                <div
                  className="errorMsg"
                  style={{ visibility: errors.password ? "visible" : "hidden" }}
                >
                  {errors.password || " "}
                </div>
              </div>
              <div className="inputBox">
                <input
                  id="signupPwCheck"
                  type="password"
                  name="passwordCheck"
                  placeholder="비밀번호 확인"
                  value={passwordCheck}
                  onChange={handleChange}
                  className={
                    errors.passwordCheck ? "inputError inputTextError" : ""
                  }
                />
                <div
                  className="errorMsg"
                  style={{
                    visibility: errors.passwordCheck ? "visible" : "hidden",
                  }}
                >
                  {errors.passwordCheck || " "}
                </div>
              </div>
            </div>
          </div>
          <button
            id="signupBtn"
            style={{
              backgroundColor: isFormValid ? "#ffbfc2" : "#d9d9d9",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
            disabled={!isFormValid}
            type="submit"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
