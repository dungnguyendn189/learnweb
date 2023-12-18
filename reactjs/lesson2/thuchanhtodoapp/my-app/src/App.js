import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="container-header">Todo App For Nguyễn Đức Dũng</div>
          <div className="container-body">
            <div className="add-todo">
              <input type="text" />
              <button>Add</button>
            </div>
            <div className="add-todo-content">
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
