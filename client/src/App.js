import Main from "./pages/Main";
import "./style.scss";
import Counter from "./pages/Counter";
import Detail from "./components/Detail";
import ApiCall from "./pages/ApiCall";
// function App() {
//   return (
//     <div>
//       <Main>하이 에이치 아이</Main>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div>
      <ApiCall />
      {/* <Main /> */}
      {/* <Detail boardData={testData}/> */}
    </div>
  );
}
export default App;
