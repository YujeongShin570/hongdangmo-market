import "./style.scss";
function Input({ title, setValue, inputType = "text" }) {
  return (
    <div className="input-wrapper">
      <div>{title} : </div>
      <input type={inputType} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default Input;

// 작성하기 버튼을 누르면 데이터를 보냄
//          Write component 안보이게 해줌
//          새로고침 대신 데이터만 새로 받아와서 바뀐 부분만 수정
