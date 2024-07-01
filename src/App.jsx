import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import About from './Components/About';
import CentreOfExcellence from './Pages/CentreOfExcellence';
import Machine from './Pages/Machine';
import ScrollToTop from './ScrollToTop';
import Connect from './Pages/Connect';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/centre/:id" element={<CentreOfExcellence />} />
        <Route path="/machine/:id/:subId" element={<Machine/>} />
        <Route path="/Connect" element={<Connect/>} />
      </Routes>
      <Footer />
      <Footer2/>
    </Router>
  );
}

export default App;