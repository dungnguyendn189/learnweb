import { useReducer, useRef } from "react";
import { setJob, addJob, delJob } from "./actionstates";
import reducer, { initState } from "./reducer";

// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function TodoAPP() {
  const [state, dispath] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleAddJob = () => {
    dispath(addJob(job));
    dispath(setJob(""));
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Todo App</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter To do"
        onChange={(e) => {
          dispath(setJob(e.target.value));
        }}
      />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <button onClick={() => dispath(delJob(index))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAPP;

// KHÔNG RERENDER LẠI GIAO DIỆN
