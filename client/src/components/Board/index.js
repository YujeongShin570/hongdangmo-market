import "./style.scss";

function Board({ title, category, time, price, user, imageLink, onClick }) {
  return (
    <div className="board" onClick={onClick}>
      <div className="contents">
        <div className="picture">
          <img src={imageLink} alt={title} />
        </div>
        <div className="contents_info">
          <div className="title"> {title} </div>
          <div className="row_display">
            <div className="category"> {category} </div>
            <div className="time"> {time}</div>
          </div>
          <div className="row_display">
            <div className="money"> {price} </div>
            <div className="user"> {user} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
