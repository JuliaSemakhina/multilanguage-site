import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"; 
import Menu from "./components/Menu"; 
import MobileMenu from './components/MobileMenu';
import Footer from "./components/Footer"; 

function App() {

  return (
    <Router basename='/multilanguage-site' >
    <Menu />
    <MobileMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
      
  )
}

export default App
