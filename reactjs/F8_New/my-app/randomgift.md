import { useState } from "react";
const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function App() {
const [gift, setGift] = useState();

const randomGift = () => {
const index = Math.floor(Math.random() \* gifts.length);
setGift(gifts[index]);
};
return (

<div className="App">
<div style={{ padding: 32 }}>
<h1>{gift || "Chưa có phần thưởng nào"}</h1>
<button onClick={randomGift}>Lấy Phần Thưởng</button>
</div>
</div>
);
}

export default App;
