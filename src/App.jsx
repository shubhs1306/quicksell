import "./App.css";
import Board from "./Components/Board/Board";

function App() {
  return (
    <div className="app">
      <div className="appNavbar">
        <h1>Kanban</h1>
      </div>
      <div className="appOuter">
        <div className="appBoards">
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
