// import { useEffect } from "react";
import { useEffect, useState, useLayoutEffect } from "react";

const lessons = [
{
id: 1,
name: "ReactJS là gì ? Tại sao nên học reactJS",
},
{
id: 2,
name: "SPA/MP là gì",
},
{
id: 3,
name: "Arrow function",
},
];

function Content() {
const [lessonID, setLesson] = useState(1);
useEffect(() => {
const handleComment = (detail) => {
console.log(detail);
};
window.addEventListener(`lesson-${lessonID}`, handleComment);
return () => {
window.removeEventListener(`lesson-${lessonID}`, handleComment);
};
}, [lessonID]);
return (
<div>
<ul>
{lessons.map((e) => (
<li
key={e.id}
style={{
              color: lessonID === e.id ? "red" : "#333",
            }}
onClick={() => setLesson(e.id)} >
{e.name}
</li>
))}
</ul>
</div>
);
}

export default Content;
