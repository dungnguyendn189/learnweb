import { useState, useReducer } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

const init = 0;
const UP_STATE = "up";
const DOWN_STATE = "down";

const reduce = (states, action) => {
  switch (action) {
    case UP_STATE:
      return states + 1;
    case DOWN_STATE:
      return states - 1;
    default:
      throw new Error("Lỗi Rồi");
  }
};

function App() {
  const [states, action] = useReducer(reduce, init);
  return (
    <div style={{ alignItems: "center", textAlign: "center", padding: 20 }}>
      <h1>{states}</h1>
      <button
        onClick={() => {
          action(UP_STATE);
        }}
      >
        UP
      </button>
      <button
        onClick={() => {
          action(DOWN_STATE);
        }}
      >
        Down
      </button>
    </div>
  );
}

export default App;

// KHÔNG RERENDER LẠI GIAO DIỆN
