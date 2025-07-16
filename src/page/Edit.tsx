import "../css/EditStyle.css";
import HeaderImg from "../img/headerImg.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDiary } from "../context/DiaryContext";
import { useState, useEffect } from "react";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { diaryList, setDiaryList } = useDiary();

  const diary = diaryList.find((d) => d.id === Number(id));

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [weather, setWeather] = useState("");
  const [mood, setMood] = useState("");
  const [keyword, setKeyword] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (diary) {
      const [y, m, d] = diary.date.split(".");
      setYear(y);
      setMonth(m);
      setDay(d);
      setWeather(diary.weather);
      setMood(diary.mood);
      setKeyword(diary.keyword);
      setContent(diary.content);
    }
  }, [diary]);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diary) return;

    const updatedDiary = {
      ...diary,
      date: `${year}.${month.padStart(2, "0")}.${day.padStart(2, "0")}`,
      weather,
      mood,
      keyword,
      content,
    };

    setDiaryList((prev) =>
      prev.map((d) => (d.id === diary.id ? updatedDiary : d))
    );
    navigate(`/diary/${diary.id}`);
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diary) return;

    setDiaryList((prev) => prev.filter((d) => d.id !== diary.id));
    navigate("/home");
  };

  if (!diary) return <div>일기를 찾을 수 없습니다.</div>;

  return (
    <div className="EditContainer">
      <div className="HomeHeader">
        <img id="HeaderImg" src={HeaderImg} alt="헤더 이미지"></img>
      </div>
      <form className="diaryBoxs" onSubmit={handleEdit}>
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={diary?.date.split(".")[0]}
                />
                <input
                  id="month"
                  type="text"
                  className="inputField"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder={diary?.date.split(".")[1]}
                />
                <input
                  id="day"
                  type="text"
                  className="inputField"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder={diary?.date.split(".")[2]}
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
                placeholder={diary?.weather}
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
                placeholder={diary?.mood}
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
                placeholder={diary?.keyword}
              />
            </div>
          </div>
        </div>
        <div className="diaryBox rightBox">
          <div className="inputContainer" id="inputContainer2">
            <div className="inputGroup" id="inputContent">
              <label className="inputTitle" htmlFor="weather">
                내용
              </label>
              <textarea
                id="content"
                className="inputField"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={diary?.content}
              />
            </div>
            <div className="buttonWrapper2">
              <button id="diaryEditBtn" type="submit">
                수정
              </button>
              <button id="diaryDeleteBtn" type="button" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edit;
