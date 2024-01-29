// import { useEffect } from "react";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

function Content() {
  const [count, setCount] = useState(60);

  const timerID = useRef();
  const preCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    preCount.current = count;
  }, [count]);
  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((e) => e - 1);
    }, 1000);
  };

  useEffect(() => {
    const react = h1Ref.current.getBoundingClientRect();
    console.log(react);
  });

  const handleStop = () => {
    clearInterval(timerID.current);
  };

  console.log(count, preCount.current);
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Content;
