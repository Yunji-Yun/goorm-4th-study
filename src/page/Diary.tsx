import "../css/DiaryStyle.css";
import HeaderImg from "../img/headerImg.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDiary } from "../context/DiaryContext";

function Diary() {
  const { id } = useParams();
  const { diaryList } = useDiary();
  const navigate = useNavigate();

  const diary = diaryList.find((d) => d.id === Number(id));

  const handleDone = () => {
    navigate("/home");
  };

  const handleEdit = () => {
    if (diary) {
      navigate(`/edit/${diary.id}`);
    }
  };

  if (!diary) {
    return <div>일기를 찾을 수 없습니다.</div>;
  }
  return (
    <div className="DiaryContainer">
      <div className="HomeHeader">
        <img id="HeaderImg" src={HeaderImg} alt="헤더 이미지"></img>
      </div>
      <form className="diaryBoxs">
        <div className="diaryBox leftBox">
          <div className="diaryContextContainer">
            <div className="diaryContextGroup">
              <div className="diaryContextTitle">날짜</div>
              <div id="dateBox" className="contextBox">
                {diary.date}
              </div>
            </div>
            <div className="diaryContextGroup">
              <div className="diaryContextTitle">날씨</div>
              <div id="weatherBox" className="contextBox">
                {diary.weather}
              </div>
            </div>
            <div className="diaryContextGroup">
              <div className="diaryContextTitle">기분</div>
              <div id="moodBox" className="contextBox">
                {diary.mood}
              </div>
            </div>
            <div className="diaryContextGroup">
              <div className="diaryContextTitle">키워드</div>
              <div id="keywordBox" className="contextBox">
                {diary.keyword}
              </div>
            </div>
          </div>
        </div>
        <div className="diaryBox rightBox">
          <div className="diaryContextContainer">
            <div className="diaryContextGroup">
              <div className="diaryContextTitle">내용</div>
              <div id="textBox" className="contextBox">
                {diary.content}
              </div>
            </div>
            <div className="buttonWrapper2">
              <button id="diarySubmitBtn2" type="button" onClick={handleDone}>
                완료
              </button>
              <button id="diaryEditBtn" type="button" onClick={handleEdit}>
                수정
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Diary;
