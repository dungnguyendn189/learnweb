import { useState, useReducer, useRef } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

const initState = {
job: "",
jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const setJob = (payload) => {
return {
type: SET_JOB,
payload,
};
};

const addJob = (payload) => {
return {
type: ADD_JOB,
payload,
};
};

const delJob = (payload) => {
return {
type: DEL_JOB,
payload,
};
};

let newStates;

const reducer = (state, action) => {
switch (action.type) {
case SET_JOB:
newStates = {
...state,
job: action.payload,
};
break;
case ADD_JOB:
newStates = {
...state,
jobs: [...state.jobs, action.payload],
};
break;
case DEL_JOB:
const newJob = [...state.jobs];
newJob.splice(action.payload, 1);

      newStates = {
        ...state,
        jobs: newJob,
      };
      break;
    default:
      throw new Error("Invalid action.");

}
console.log(newStates);
return newStates;
};

function App() {
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

export default App;

// KHÔNG RERENDER LẠI GIAO DIỆN
