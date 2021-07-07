// import "./style.scss";
// import Board from "../Board";

// function Category({ BoardComponents }) {
//   console.log(BoardComponents);
//   const boards = BoardComponents;
//   return <div>boards</div>;
// }

// // {boardData === null ? (
// //   BoardComponents
// // ) : (
// //   <Detail
// //     boardData={boardData}
// //     setTestData={() => {}}
// //     setBoardData={setBoardData}
// //     setVisible={setVisible}
// //     inputState={inputStates}
// //   />
// // )}
// // const BoardComponents = testData.map((boardData) => {
// //   return (
// //     <Board
// //       key={boardData._id}
// //       title={boardData.title}
// //       category={boardData.category}
// //       time={boardData.time}
// //       price={boardData.price}
// //       user={boardData.user}
// //       imageLink={boardData.imageLink}
// //       onClick={() => {
// //         setBoardData({
// //           ...boardData,
// //         });
// //       }}
// //     />
// //   );
// // const { title, category, money, user, imageLink } = inputState;

// // const deleteBoardData = () => {
// //   const id = boardData.id;
// //   setTestData((state) => {
// //     // console.log(state);
// //     const newState = state.filter((board) => {
// //       return id !== board.id;
// //     });
// //     // console.log(newState);
// //     setBoardData(null);
// //     return newState;
// //   });
// // };

// // return (
// //   <div>
// //     <Board title={boardData.title} category={boardData.category} />
// //     <div className="detail">
// //       <div>글내용</div>
// //       <div>{boardData.detailText}</div>
// //       <div className="detail">
// //         <button onClick={() => setVisible(true)}>수정하기</button>
// //         {/* <button onClick={updateBoardData}>수정하기</button> */}
// //         <button onClick={deleteBoardData}>삭제하기</button>
// //       </div>
// //     </div>
// //   </div>
// // );
// // }

// export default Category;
import './style.scss';
import CategoryList from '../../components/CategoryList';
import CategoryInput from '../../components/CategoryInput';
import useApiCall from '../../hooks/useApiCall';
import { useState } from 'react';

function CategoryPage() {
  const [loading, categoryData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/category`
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!categoryData) {
    // null일경우
    return <></>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className="category-page">
      <CategoryList
        categoryList={categoryData}
        categoryFetch={fetchData}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryInput
        categoryFetch={fetchData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default CategoryPage;
