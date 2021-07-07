// import Board from '../../components/Board';
// import Write from '../../components/Write';
// import Footer from '../../components/Footer';
// import Detail from '../../components/Detail';
// import Category from '../../components/Category';
// import './style.scss';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import useApiCall from '../../hooks/useApiCall';
// import ApiCall from '../ApiCall';

// function Main() {
//   // const [testData, setTestData] = useState([]);
//   // const [testData, setTestData] = useState(inittestData);
//   const [boardData, setBoardData] = useState(null);
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [money, setMoney] = useState('');
//   const [user, setUser] = useState('');
//   const [imageLink, setImageLink] = useState('');
//   const [visible, setVisible] = useState(false);

//   const inputStates = {
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
//   };
//   const [loading, testData, error, fetchData] = useApiCall(
//     'http://localhost:4000/api/board'
//   );

//   if (testData === null) {
//     return <>에러입니다 </>;
//   }
//   if (loading === true) {
//     return <>로딩중입니다</>;
//   }
//   if (error !== null) {
//     return <>에러입니다</>;
//   }
//   const BoardComponents = testData.map((boardData) => {
//     return (
//       <Board
//         key={boardData._id}
//         title={boardData.title}
//         category={boardData.category}
//         time={boardData.time}
//         price={boardData.price}
//         user={boardData.user}
//         imageLink={boardData.imageLink}
//         onClick={() => {
//           setBoardData({
//             ...boardData,
//           });
//         }}
//       />
//     );
//   });

//   // const buttonOnClick = () => { };
//   return (
//     <div>
//       <div className="header">홍당무 마켓</div>
//       {boardData === null ? (
//         BoardComponents
//       ) : (
//         <Detail
//           boardData={boardData}
//           setTestData={() => {}}
//           setBoardData={setBoardData}
//           setVisible={setVisible}
//           inputState={inputStates}
//         />
//       )}

//       <Footer buttonList={buttonList} />
//       <button
//         className="open-button"
//         onClick={() => setVisible((state) => !state)}
//       ></button>
//       {visible ? (
//         <Write
//           boardData={boardData}
//           setData={() => {}}
//           inputState={inputStates}
//           setVisible={setVisible}
//           setTestData={() => {}}
//           setBoardData={setBoardData}
//           fetchData={fetchData}
//         />
//       ) : null}
//     </div>
//   );
// }

// export default Main;
import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Route, useHistory, useLocation } from 'react-router';

import './style.scss';

import { useState } from 'react';
import useApiCall from '../../hooks/useApiCall';

function Main() {
  const history = useHistory();
  const location = useLocation(); // 현재 url에서 id값을 얻기 위해
  const [loading, testData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/board`
  );

  const [visible, setVisible] = useState(false);

  if (!testData) {
    return <></>;
  }

  if (loading) {
    return <>로딩중...</>;
  }

  if (error) {
    return <>에러 : {error}</>;
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
        setBoardData={() => {
          history.push(`/board/${boardData._id}`);
        }}
      />
    );
  });
  // 현재 url에서 id값을 얻음
  // location.pathname => /board/id값
  // .split('/') => ['', 'board', 'id값']
  // [2] => 'id값'
  const id = location.pathname.split('/')[2];
  const selectedBoardData = testData.find((el) => {
    return el._id === id;
  });

  return (
    <div>
      <Route exact path="/">
        <div className="board-components-wrapper">{BoardComponents}</div>
      </Route>
      <Route path={`/board/:id`}>
        <Detail
          boardData={selectedBoardData}
          setTestData={() => {}}
          setVisible={setVisible}
        />
      </Route>
      <button
        className="open-button"
        onClick={() => setVisible((state) => !state)}
      ></button>
      {visible ? (
        <Write
          boardData={selectedBoardData}
          setData={() => {}}
          setVisible={setVisible}
          fetchData={fetchData}
        />
      ) : null}
    </div>
  );
}

export default Main;
