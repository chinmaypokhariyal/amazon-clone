import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
