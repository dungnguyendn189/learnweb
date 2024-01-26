import { useState } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function App() {
const [job, setJob] = useState("");
const [jobs, setJobs] = useState(() => {
const storegeJobs = JSON.parse(localStorage.getItem("jobs"));
return storegeJobs;
});
const handleClick = () => {
setJobs((prev) => {
const newJobs = [...prev, job];
//save to json storest
const jsonJobs = JSON.stringify(newJobs);
localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");

};
return (
<div className="App" style={{ padding: 32 }}>
<input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
<button onClick={handleClick}>Add</button>
<ul>
{jobs.map((e, index) => (
<li key={index}>{e}</li>
))}
</ul>
</div>
);
}

export default App;
