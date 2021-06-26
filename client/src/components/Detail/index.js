import "./style.scss";
import Board from "../Board";

function Detail({
  boardData,
  setTestData,
  setBoardData,
  setVisible,
  inputState,
}) {
  const { title, category, money, user, imageLink } = inputState;

  const deleteBoardData = () => {
    const id = boardData.id;
    setTestData((state) => {
      // console.log(state);
      const newState = state.filter((board) => {
        return id !== board.id;
      });
      // console.log(newState);
      setBoardData(null);
      return newState;
    });
  };

  return (
    <div>
      <Board title={boardData.title} category={boardData.category} />
      <div className="detail">
        <div>글내용</div>
        <div>{boardData.detailText}</div>
        <div className="detail">
          <button onClick={() => setVisible(true)}>수정하기</button>
          {/* <button onClick={updateBoardData}>수정하기</button> */}
          <button onClick={deleteBoardData}>삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
