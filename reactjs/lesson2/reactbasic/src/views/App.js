import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/mycomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=YDTdZC7eEik&list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy&index=19
