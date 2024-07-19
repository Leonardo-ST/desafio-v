import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './css/App.css';
import './css/index.css'
import Home from "./components/pages/Home";
//import About from "./components/pages/About"; 
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 

function App() {
  return (
  <div className='App'>
  <Navbar />
  
 <Router>
  <Routes>
    <Route exact path="/" element={<Home /> } />
  </Routes>
 </Router>

  <Footer />
    </div>
  )
}

export default App;
