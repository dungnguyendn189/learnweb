import logo from "./logo.svg";
import "./App.css";
import ListToDo from "./views/todo/Listtodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple Todo App For Nguyễn Đức Dũng</p>
        <ListToDo />
      </header>
    </div>
  );
}

export default App;
