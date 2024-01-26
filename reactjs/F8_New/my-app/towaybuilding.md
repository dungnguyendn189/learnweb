import { useState } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];
const courses = [
{
id: 1,
name: "HTML,CSS",
},
{
id: 2,
name: "JavaScript",
},
{
id: 3,
name: "React Native",
},
];

function App() {
const [checked, setChecked] = useState(1);
const [checkedbox, setCheckedbox] = useState([]);

const handleSubmit = () => {
console.log(checked);
};
const handleCheck = (id) => {
setCheckedbox((prev) => {
const isChecked = checkedbox.includes(id);
if (isChecked) {
return checkedbox.filter((item) => item !== id);
} else {
return [...prev, id];
}
});
};

const handleSubmitCheckbox = () => {
console.log({ id: checkedbox });
};

return (
<div className="App">
<div style={{ padding: 32 }}>
{courses.map((e) => (
<div key={e.id}>
<input
checked={checked === e.id}
type="radio"
onChange={() => setChecked(e.id)}
/>
{e.name}
</div>
))}
<button onClick={handleSubmit}>Register</button>
{courses.map((e) => (
<div key={e.id}>
<input
checkedbox={checkedbox.includes(e.id)}
type="checkbox"
onChange={() => handleCheck(e.id)}
/>
{e.name}
</div>
))}
<button onClick={handleSubmitCheckbox}>Register</button>
</div>
</div>
);
}

export default App;
