//import { BrowserRouter as Router, Link } from "react-router-dom";
import '../css/Navbar.css'
import SunSvg from '../svg/SunSvg'
//import Home from "./pages/Home";
//import About from "./pages/About"; // Exemplo de outra página

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>Sunrise List</h1>
      </nav>
      <SunSvg></SunSvg>
    </div>
  );
}

export default Navbar;
