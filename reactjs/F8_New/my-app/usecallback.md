// import { useEffect } from "react";
import { useEffect, useState, useLayoutEffect, useRef, memo } from "react";

function Content({ onIncrement }) {
return (
<>
<h2>Hello Dũng</h2>
<button onClick={onIncrement}>Start</button>
</>
);
}

export default memo(Content);

import {
useEffect,
useState,
useLayoutEffect,
useRef,
memo,
useCallback,
} from "react";
import Content from "./content";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function App() {
const [count, setCount] = useState(0);

const increment = useCallback(() => {
setCount((count) => count + 1);
}, []);

return (
<div style={{ padding: 32 }}>
<Content onIncrement={increment} />
<h1>{count}</h1>
</div>
);
}

export default App;

// KHÔNG RERENDER LẠI GIAO DIỆN
