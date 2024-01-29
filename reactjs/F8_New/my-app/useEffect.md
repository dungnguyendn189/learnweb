import { useEffect } from "react";
import { useState } from "react";

function Content() {
const tabs = ["posts", "comments", "albums"];
const [title, setTitle] = useState("");
const [posts, setPosts] = useState([]);
const [type, setType] = useState("posts");
//1 . (callbacks)
//goi callback mỗi khi componentt rerender
// gọi callback sau khi component thêm element vào dom
//2(callbacks,[])
//gọi callback một lần sau khi component mounted
//3. useEffect(callback,[deps])
//callback sex dduowcj goi lai moi khi dep thay doi
useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/${type}`)
.then((res) => res.json())
.then((posts) => {
setPosts(posts);
});
}, [type]);

return (

<div>
{tabs.map((tab) => (
<button
key={tab}
style={
type === tab
? {
color: "white",
backgroundColor: "blue",
}
: {}
}
onClick={() => setType(tab)} >
{tab}
</button>
))}
<input
value={title}
onChange={(e) => {
setTitle(e.target.value);
}}
/>
<ul>
{posts.map((post) => (
<li key={post.id}>{post.body}</li>
))}
</ul>
</div>
);
}

export default Content;
