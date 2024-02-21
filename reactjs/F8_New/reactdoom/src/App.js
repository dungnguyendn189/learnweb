import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">New</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
