import React, { useState } from "react";
import Input from "./Input";
import "./style.scss";
import axios from "axios";
// import board from "../../../../server/src/models/board";

function Write({ setData, setBoardData, boardData, setVisible, fetchData }) {
  const [title, setTitle] = useState(setData?.title || "");
  const [imageLink, setImageLink] = useState(setData.imageLink ?? "");
  const [category, setCategory] = useState(setData.category ?? "");
  const [price, setPrice] = useState(setData.price ?? "");
  const [contents, setContents] = useState(setData.content ?? "");

  const createBoardData = async () => {
    // console.log("작성하기 버튼이 클릭됐을 때 ");
    await axios.post("http://localhost:4000/api/board", {
      title,
      imageLink,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const deleteBoardData = async () => {
    await axios.delete("http://localhost:4000/api/board", {
      _id: boardData._id,
    });
    setVisible(false);
    fetchData();
    setBoardData(null);
  };

  // console.log(title, imageLink, category, price, contents);
  const updateBoardData = async () => {
    // console.log(boardData);
    // const id = boardData._id;
    // if (boardData._id === id) {
    await axios.put("http://localhost:4000/api/board", {
      title,
      imageLink,
      category,
      price,
      contents,
    });
    // }
    setVisible(false);
    fetchData();
  };
  // setData((state) => {
  //   console.log(title, imageLink);
  //   const id = boardData.id;
  //   const newState = state.map((board) => {
  //     if (board.id !== id) {
  //       return board;
  //     } else {
  //       return {
  //         id: id,
  //         title: title,
  //       };
  //     }
  //   });
  // setBoardData(null);
  // return newState;

  // };
  if (boardData === null) {
    return (
      <div className="write">
        <div className="inputs-wrapper">
          <Input title={"글 제목"} setValue={setTitle} />
          <Input title={"사진 링크"} setValue={setImageLink} />
          <Input title={"카테고리"} setValue={setCategory} />
          <Input title={"가격"} setValue={setPrice} inputType={"number"} />
          <Input title={"글 내용"} setValue={setContents} />
          <div className="button-wrapper">
            <button className="green" onClick={createBoardData}>
              작성하기
            </button>
            <button
              className="red"
              onClick={() => {
                setVisible(false);
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // 여기는 수정하기
    return (
      <div className="write">
        <div className="inputs-wrapper">
          <Input title={"글 제목"} setValue={setTitle} />
          <Input title={"사진 링크"} setValue={setImageLink} />
          <Input title={"카테고리"} setValue={setCategory} />
          <Input title={"가격"} setValue={setPrice} inputType={"number"} />
          <Input title={"글 내용"} setValue={setContents} />
          <div className="button-wrapper">
            <button className="green" onClick={updateBoardData}>
              수정하기
            </button>
            <button className="red" onClick={deleteBoardData}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Write;
// // import React, { useState } from "react";
// // import "./style.scss";
// // import React, { useState } from "react";
// import Input from "./Input";
// // import "./style.scss";
// // const imageLink =
// //   'http://itimg.chosun.com/sitedata/image/202001/14/2020011400634_0.jpg';
// function Index({
//   setData,
//   boardData,
//   inputState,
//   setVisible,
//   setTestData,
//   setBoardData,
// }) {
//   const {
//     setTitle,
//     setCategory,
//     setMoney,
//     setUser,
//     setImageLink,
//     title,
//     category,
//     money,
//     user,
//     imageLink,
//   } = inputState;
//   const updateBoardData = () => {
//     setVisible(true);
//     // setTestData()
//     // });
//     const id = boardData.id;
//     setTestData((state) => {
//       const newState = state.map((board) => {
//         if (id !== board.id) {
//           return board;
//         } else {
//           return {
//             id: board.id,
//             title: title,
//             category: category,
//             time: 12,
//             money: money,
//             user: user,
//             imageLink: imageLink,
//             detailText: "상품",
//           };
//         }
//       });
//       setVisible(false);
//       setBoardData(null);
//       return newState;
//     });
//   };
//   const test = {
//     id: 6,
//     title: title,
//     category: category,
//     time: 13,
//     money: money,
//     user: user,
//     imageLink: imageLink,
//   };
//   if (boardData === null) {
//     return (
//       <div className="write">
//         {/* <span className="fixed">글 제목</span> */}
//         <div className="item">
//           글 제목 :{" "}
//           <input
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//           />
//         </div>

//         <div className="item">
//           사진링크 :{" "}
//           <input
//             onChange={(event) => {
//               setImageLink(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           카테고리 :{" "}
//           <input
//             onChange={(event) => {
//               setCategory(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           가격 :{" "}
//           <input
//             onChange={(event) => {
//               setMoney(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           User :{" "}
//           <input
//             onChange={(event) => {
//               setUser(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           글 내용 :{" "}
//           <textarea
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//           />
//         </div>
//         {/* // spread 연산자 */}
//         <button onClick={() => setData((state) => [...state, test])}>
//           Add
//         </button>
//       </div>
//     );
//   } else {
//     //수정하기
//     return (
//       <div className="write">
//         {/* <span className="fixed">글 제목</span> */}
//         <div className="item">
//           글 제목 :{" "}
//           <input
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//             value={boardData.title}
//           />
//         </div>

//         <div className="item">
//           사진링크 :{" "}
//           <input
//             onChange={(event) => {
//               setImageLink(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           카테고리 :{" "}
//           <input
//             onChange={(event) => {
//               setCategory(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           가격 :{" "}
//           <input
//             onChange={(event) => {
//               setMoney(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           User :{" "}
//           <input
//             onChange={(event) => {
//               setUser(event.target.value);
//             }}
//           />
//         </div>
//         <div className="item">
//           글 내용 :{" "}
//           <textarea
//             onChange={(event) => {
//               setTitle(event.target.value);
//             }}
//           />
//         </div>
//         {/* // spread 연산자 */}
//         {boardData !== null ? (
//           <button onClick={updateBoardData}>Update</button>
//         ) : (
//           <button onClick={() => setData((state) => [...state, test])}>
//             Add
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// export default Index;

// // position
// // static, fixed, absolute, relative
