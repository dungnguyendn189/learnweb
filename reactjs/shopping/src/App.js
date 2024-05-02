import "./App.scss";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handlAddSubmit = () => {
    if (input.trim() !== "") {
      setItem((props) => [
        ...props,
        { id: Date.now(), text: input, isEdit: false },
      ]);
      setInput("");
    }
  };

  const handleDeleted = (id) => {
    // const newItem = [...item];
    const newItem = item.filter((item) => item.id !== id);
    setItem(newItem);
  };

  const handleEdit = (item) => {
    item.isEdit = true;

    console.log(item.isEdit);
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
        {item.map((item, index) => (
          <div className="result" key={item.id}>
            <div className="warp-result">
              <div className="fix">
                <div className="name">{item.text}</div>
                <div>
                  <button
                    className="deleted-btn"
                    onClick={() => handleDeleted(item.id)}
                  >
                    Deleted
                  </button>
                  <button className="deleted-btn" onClick={() => {}}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
