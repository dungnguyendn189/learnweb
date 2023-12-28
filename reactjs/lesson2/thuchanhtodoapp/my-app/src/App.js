import logo from "./logo.svg";
import "./App.css";
import "./Todo/Todoss.scss";
import BodyContainer from "./Todo/Bodycontainer.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./NAV/nav.js";
import Home from "./Example/Home.js";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <BodyContainer /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <BodyContainer />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
