import Board from "../../components/Board";
import Write from "../../components/Write";
import Footer from "../../components/Footer";
import Detail from "../../components/Detail";
import "./style.scss";
import { useState } from "react";

const inittestData = [
  {
    id: 1,
    title: "맥북 프로 16인치",
    category: "노트북",
    time: 12,
    money: 100000,
    user: "회원 1",
    imageLink:
      "http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg",
    detailText: "1번째 상품",
  },
  {
    id: 2,
    title: "책상",
    category: "가구",
    time: 3600,
    money: 10000,
    user: "회원 2",
    imageLink:
      "https://post-phinf.pstatic.net/MjAxOTA4MDRfMjA5/MDAxNTY0OTIyOTM3MjY3.Ryts0JnnstdfbRx29prDkImS-0j1J-Tuxf6Z6EtJnXcg.sWqSIpivylK5IMYltw62vwGSDD-T-rUmrZ51mDwxfAAg.PNG/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-08-04_%EC%98%A4%ED%9B%84_9.46.00.png?type=w1200",
    detailText: "2번째 상품",
  },
  {
    id: 3,
    title: "축구공",
    category: "스포츠",
    time: 86400,
    money: 0,
    user: "회원 3",
    imageLink: "http://image.auction.co.kr/itemimage/18/f3/b8/18f3b8bb76.jpg",
    detailText: "3번째 상품",
  },
];

function Main() {
  const [testData, setTestData] = useState(null);
  // const [testData, setTestData] = useState(inittestData);
  const [boardData, setBoardData] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [money, setMoney] = useState("");
  const [user, setUser] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [visible, setVisible] = useState(false);

  const inputStates = {
    setTitle,
    setCategory,
    setMoney,
    setUser,
    setImageLink,
    title,
    category,
    money,
    user,
    imageLink,
  };
  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData.id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        money={boardData.money}
        user={boardData.user}
        imageLink={boardData.imageLink}
        onClick={() => {
          setBoardData({
            ...boardData,
          });
        }}
      />
    );
  });

  // const buttonOnClick = () => { };
  return (
    <div>
      <div className="header">홍당무 마켓</div>
      {boardData === null ? (
        BoardComponents
      ) : (
        <Detail
          boardData={boardData}
          setTestData={setTestData}
          setBoardData={setBoardData}
          setVisible={setVisible}
          inputState={inputStates}
        />
      )}

      {/* <div className="boardlist">{BoardComponents}</div> */}

      <Footer buttonList={["홈", "검색", "내글"]} />
      <button className="button_design" onClick={() => setVisible(true)}>
        +
      </button>
      <button className="closeButton" onClick={() => setVisible(!visible)}>
        -
      </button>
      {visible ? (
        <Write
          boardData={boardData}
          setData={setTestData}
          inputState={inputStates}
          setVisible={setVisible}
          setTestData={setTestData}
          setBoardData={setBoardData}
        />
      ) : null}
      {/* <Detail  boardData={testData}/> */}
    </div>
  );
}

export default Main;
