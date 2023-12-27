import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";

function App() {
  return (
    <CartProvider>
      {" "}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/createuser" element={<Signup />}></Route>
          <Route exact path="/myorder" element={<MyOrder />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
