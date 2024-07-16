import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/Navbar.css'
import Home from "./pages/Home";
import About from "./pages/About"; // Exemplo de outra página

function Navbar() {
  return (
    <div className="navbar">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link> {/* Link para outra página */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Rota para outra página */}
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
