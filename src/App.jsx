import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import CentreOfExcellence from './Pages/CentreOfExcellence';
import Machine from './Pages/Machine';
import ScrollToTop from './ScrollToTop';
import Connect from './Pages/Connect';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/centre/:id" element={<CentreOfExcellence />} />
        <Route path="/machine/:id/:subId" element={<Machine/>} />
        <Route path="/Connect" element={<Connect/>} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
      <Footer2/>
    </Router>
  );
}

export default App;