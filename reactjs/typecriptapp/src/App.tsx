import { useState } from "react";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layouts/Footer";
import CreatePizzaPage from "./pages/CreatePizzaPage";

function App() {
  // const abc = 5;
  // const nameList = ["Nine Dev", 123, "Dung Map"];

  const name = "Nine Dev";

  const handleName = () => {
    setName("aaaaa");
  };
  const [a, setName] = useState(name);

  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <CreatePizzaPage /> */}
      <Footer />
    </div>
  );
}

export default App;
