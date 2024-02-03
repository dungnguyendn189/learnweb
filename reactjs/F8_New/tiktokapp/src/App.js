import Content from "./content";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <button>Toggle Theme</button>
        <Content theme={theme} />
      </div>
    </div>
  );
}

export default App;
