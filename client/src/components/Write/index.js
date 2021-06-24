import React, { useState } from "react";
import "./style.scss";

// const imageLink =
//   'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
function Index({
  setData,
  boardData,
  inputState,
  setVisible,
  setTestData,
  setBoardData,
}) {
  const {
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
  } = inputState;
  const updateBoardData = () => {
    setVisible(true);
    // setTestData()
    // });
    const id = boardData.id;
    setTestData((state) => {
      const newState = state.map((board) => {
        if (id !== board.id) {
          return board;
        } else {
          return {
            id: board.id,
            title: title,
            category: category,
            time: 12,
            money: money,
            user: user,
            imageLink: imageLink,
            detailText: "상품",
          };
        }
      });
      setVisible(false);
      setBoardData(null);
      return newState;
    });
  };
  const test = {
    id: 6,
    title: title,
    category: category,
    time: 13,
    money: money,
    user: user,
    imageLink: imageLink,
  };
  if (boardData === null) {
    return (
      <div className="write">
        {/* <span className="fixed">글 제목</span> */}
        <div className="item">
          글 제목 :{" "}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="item">
          사진링크 :{" "}
          <input
            onChange={(event) => {
              setImageLink(event.target.value);
            }}
          />
        </div>
        <div className="item">
          카테고리 :{" "}
          <input
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
        <div className="item">
          가격 :{" "}
          <input
            onChange={(event) => {
              setMoney(event.target.value);
            }}
          />
        </div>
        <div className="item">
          User :{" "}
          <input
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="item">
          글 내용 :{" "}
          <textarea
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        {/* // spread 연산자 */}
        <button onClick={() => setData((state) => [...state, test])}>
          Add
        </button>
      </div>
    );
  } else {
    //수정하기
    return (
      <div className="write">
        {/* <span className="fixed">글 제목</span> */}
        <div className="item">
          글 제목 :{" "}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={boardData.title}
          />
        </div>

        <div className="item">
          사진링크 :{" "}
          <input
            onChange={(event) => {
              setImageLink(event.target.value);
            }}
          />
        </div>
        <div className="item">
          카테고리 :{" "}
          <input
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          />
        </div>
        <div className="item">
          가격 :{" "}
          <input
            onChange={(event) => {
              setMoney(event.target.value);
            }}
          />
        </div>
        <div className="item">
          User :{" "}
          <input
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="item">
          글 내용 :{" "}
          <textarea
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        {/* // spread 연산자 */}
        {boardData !== null ? (
          <button onClick={updateBoardData}>Update</button>
        ) : (
          <button onClick={() => setData((state) => [...state, test])}>
            Add
          </button>
        )}
      </div>
    );
  }
}

export default Index;

// position
// static, fixed, absolute, relative
