import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contuct from "./pages/Contuct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contuct" element={<Contuct />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
