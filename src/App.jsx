import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;