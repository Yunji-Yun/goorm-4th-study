import "../css/WriteStyle.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderImg from "../img/headerImg.png";
import { useDiary } from "../context/DiaryContext";

function Write() {
  const { diaryList, setDiaryList } = useDiary();
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [weather, setWeather] = useState("");
  const [mood, setMood] = useState("");
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");

  const isFormValid = [year, month, day, weather, mood, keyword, content].every(
    (v) => v.trim() !== ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const date = `${year}.${month.padStart(2, "0")}.${day.padStart(2, "0")}`;

    const newDiary = {
      id: Date.now(),
      date,
      weather,
      mood,
      keyword,
      content,
    };

    setDiaryList((prev) => [...prev, newDiary]);
    navigate("/home");
  };

  return (
    <div className="WriteContainer">
      <div className="HomeHeader">
        <img id="HeaderImg" src={HeaderImg} alt="헤더 이미지"></img>
      </div>
      <form className="diaryBoxs" onSubmit={handleSubmit}>
        <div className="diaryBox leftBox">
          <div className="inputContainer">
            <div className="inputGroup">
              <label className="inputTitle" htmlFor="dateFrom">
                날짜
              </label>
              <div className="dateInputs">
                <input
                  id="year"
                  type="text"
                  className="inputField"
                  placeholder="년"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                <input
                  id="month"
                  type="text"
                  className="inputField"
                  placeholder="월"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <input
                  id="day"
                  type="text"
                  className="inputField"
                  placeholder="일"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
              </div>
            </div>
            <div className="inputGroup">
              <label className="inputTitle" htmlFor="weather">
                날씨
              </label>
              <input
                id="weather"
                type="text"
                className="inputField"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label className="inputTitle" htmlFor="mood">
                기분
              </label>
              <input
                id="mood"
                type="text"
                className="inputField"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <label className="inputTitle" htmlFor="keyword">
                키워드
              </label>
              <textarea
                id="keyword"
                className="inputField"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="diaryBox rightBox">
          <div className="inputContainer">
            <div className="inputGroup" id="inputContent">
              <label className="inputTitle" htmlFor="weather">
                내용
              </label>
              <textarea
                id="content"
                className="inputField"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="buttonWrapper">
              <button
                id="diarySubmitBtn"
                type="submit"
                disabled={!isFormValid}
                style={{
                  backgroundColor: isFormValid ? "#FFBFC2" : "#D9D9D9",
                }}
              >
                완료
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Write;
