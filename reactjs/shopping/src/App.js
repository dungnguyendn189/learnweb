import "./App.scss";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handlAddSubmit = () => {
    setItem((props) => [...props, input]);
    setInput("");
    console.log(item);
  };

  const handleDeleted = (index) => {
    setItem((props) => [...props, item.splice(index, 1)]);
  };

  return (
    <div className="warp">
      <header className="header">
        <h1>TODO APP</h1>
      </header>
      <div className="body">
        <div className="warpinput-all">
          <div className="warp-input">
            <input
              value={input}
              type="text"
              placeholder="Input My Name"
              className="input"
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn-add" onClick={handlAddSubmit}>
              Submit
            </button>
          </div>
        </div>
        {item.map((value, index) => (
          <div className="result">
            <div className="warp-result">
              <div className="fix">
                <div className="name">{value}</div>
                <button
                  className="deleted-btn"
                  onClick={() => handleDeleted(index)}
                >
                  Deleted
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
