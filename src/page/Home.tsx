import "../css/HomeStyle.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderImg from "../img/headerImg.png";
import PlusImg from "../img/plus.png";
import { useDiary } from "../context/DiaryContext";

function Home() {
  const navigate = useNavigate();
  const { diaryList } = useDiary();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="HomeContainer">
      <div className="HomeHeader">
        <img id="HeaderImg" src={HeaderImg} alt="헤더 이미지"></img>
      </div>
      <div className="diaryContainer">
        {diaryList.map((diary) => (
          <div
            key={diary.id}
            id="diaryBox"
            onClick={() => navigate(`/diary/${diary.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div id="diaryDate">{diary.date}</div>
            <div className="diaryDivider" />
            <div id="diaryText">
              {diary.content.length > 150
                ? diary.content.slice(0, 150) + "..."
                : diary.content}
            </div>
          </div>
        ))}
      </div>
      <div className="goToWriteBtn" onClick={() => navigate("/write")}>
        <img src={PlusImg} alt="작성 버튼" className="plusIcon" />
      </div>
    </div>
  );
}

export default Home;
