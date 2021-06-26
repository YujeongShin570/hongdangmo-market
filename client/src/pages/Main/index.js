import Board from "../../components/Board";
import Write from "../../components/Write";
import Footer from "../../components/Footer";
import Detail from "../../components/Detail";
import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import useApiCall from "../../hooks/useApiCall";
import ApiCall from "../ApiCall";

function Main() {
  // const [testData, setTestData] = useState([]);
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
  const [loading, testData, error, fetchData] = useApiCall(
    "http://localhost:4000/api/board"
  );

  if (testData === null) {
    return <>에러입니다 </>;
  }
  if (loading === true) {
    return <>로딩중입니다</>;
  }
  if (error !== null) {
    return <>에러입니다</>;
  }
  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData._id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        price={boardData.price}
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
          setTestData={() => {}}
          setBoardData={setBoardData}
          setVisible={setVisible}
          inputState={inputStates}
        />
      )}

      {/* <div className="boardlist">{BoardComponents}</div> */}

      <Footer buttonList={["홈", "검색", "내글"]} />
      {/* <button className="button_design" onClick={() => setVisible(true)}>
        +
      </button>
      <button className="closeButton" onClick={() => setVisible(!visible)}>
        -
      </button> */}
      <button
        className="open-button"
        onClick={() => setVisible((state) => !state)}
      ></button>
      {visible ? (
        <Write
          boardData={boardData}
          setData={() => {}}
          inputState={inputStates}
          setVisible={setVisible}
          setTestData={() => {}}
          setBoardData={setBoardData}
          fetchData={fetchData}
        />
      ) : null}
      {/* <Detail  boardData={testData}/> */}
    </div>
  );
}

export default Main;
