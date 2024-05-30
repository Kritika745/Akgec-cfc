import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import About from './Components/About';
import CentreOfExcellence from './Pages/CentreOfExcellence';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/centre/:id" element={<CentreOfExcellence />} />
      </Routes>
      <Footer />
      <Footer2/>
    </Router>
  );
}

export default App;