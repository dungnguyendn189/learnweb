import { useState } from "react";
import Content from "./content";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" style={{ padding: 32 }}>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show
      </button>
      {show && <Content />}
    </div>
  );
}

export default App;
