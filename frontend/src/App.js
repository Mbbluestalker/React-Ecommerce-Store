import "./App.css";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
