import "./App.css";
import { useRef } from "react";
import Video from "./video";

function App() {
  const videoRef = useRef();

  const handlPlay = () => {
    videoRef.current.play();
  };
  const handlPause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="App">
      <Video ref={videoRef} />
      <button onClick={handlPlay}>Play</button>
      <button onClick={handlPause}>Pause</button>
    </div>
  );
}

export default App;
