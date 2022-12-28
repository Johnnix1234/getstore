import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Component/cart";
import Error from "./Component/error";
import Home from "./Component/Home";
import Signin from "./Component/signin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="row">
          <div className="titleleft">
            <Link to="/">GetStore</Link>
          </div>

          <div className="titleright">
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </nav>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <footer>&copy; 2022 Ibikunle John</footer>
      </div>
    </Router>
  );
}

export default App;
