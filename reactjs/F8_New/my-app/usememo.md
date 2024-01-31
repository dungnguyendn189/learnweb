import { useState, useMemo, useRef } from "react";
// const gifts = ["CUP I9", "Ram 32GB RGB", "RGB Keyboard"];

function App() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [product, setProduct] = useState([]);
const nameRef = useRef();
const handleSubmit = () => {
setProduct([...product, { name, price: parseInt(price) }]);
setName("");
setPrice("");
nameRef.current.focus();
};

const total = useMemo(() => {
const result = product.reduce((result, prod) => {
console.log("Tinh Yosn lai");
return result + prod.price;
}, 0);
return result;
}, [product]);
return (
<div>
<input
ref={nameRef}
value={name}
placeholder="Enter Name ..."
onChange={(e) => setName(e.target.value)}
/>
<br />
<input
ref={nameRef}
value={price}
placeholder="Enter Price ..."
onChange={(e) => setPrice(e.target.value)}
/>
<br />
<button onClick={handleSubmit}>Add</button>
<br />
Total: {total}
<ul>
{product.map((e, index) => (
<li key={index}>
{" "}
{e.name} - {e.price}
</li>
))}
</ul>
</div>
);
}

export default App;

// KHÔNG RERENDER LẠI GIAO DIỆN
