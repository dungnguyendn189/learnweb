import "./App.css";
import { useStore, actions } from "./modal";

function App() {
  const [state, dispath] = useStore();
  const { jobs, input } = state;
  const handleAdd = () => {
    dispath(actions.addInput(input));
  };
  console.log(jobs);

  return (
    <div className="App" style={{ padding: 30 }}>
      <input
        placeholder="Input Todo"
        value={input}
        onChange={(e) => {
          dispath(actions.setInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {jobs.map((e, index) => (
        <h3 key={index}>{e}</h3>
      ))}
    </div>
  );
}

export default App;
