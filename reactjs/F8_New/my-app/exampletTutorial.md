// inc +1

// function App() {
// const orders = [100, 200, 300];
// const [counter, setCounter] = useState(() => {
// const total = orders.reduce((total, cur) => total + cur);
// return total;
// });
// const handleIncrease = () => {
// setCounter(counter + 1);
// };
// return (
// <div className="App">
// <h1>{counter}</h1>
// <button onClick={handleIncrease}>Increate</button>
// </div>
// );
// }

// export default App;

function App() {
const [info, setInfo] = useState({
name: "Nguyen Duc Dung",
age: 30,
address: "Da Nang , VN",
});

const handleUpdate = () => {
setInfo({
...info,
bio: "Yeu Mau Hong",
});
};

return (
<div className="App">
<h1>{JSON.stringify(info)}</h1>
<button onClick={handleUpdate}>Update</button>
</div>
);
}

export default App;
