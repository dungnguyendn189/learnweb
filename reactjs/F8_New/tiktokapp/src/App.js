import Content from "./content";
import "./App.css";
import { ThemeContext } from "./ThemeContex";
import { useContext } from "react";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
    </div>
  );
}

export default App;
