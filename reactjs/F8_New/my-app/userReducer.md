import { useState, useReducer } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

const initStates = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
switch (action) {
case UP_ACTION:
return state + 1;
case DOWN_ACTION:
return state - 1;
default:
throw new Error("Invalid Action");
}
};

function App() {
const [count, dispath] = useReducer(reducer, initStates);

return (

<div style={{ alignItems: "center", textAlign: "center", padding: 20 }}>
<h1>{count}</h1>
<button onClick={() => dispath(UP_ACTION)}>UP</button>
<button onClick={() => dispath(DOWN_ACTION)}>Down</button>
</div>
);
}

export default App;

// KHÔNG RERENDER LẠI GIAO DIỆN
