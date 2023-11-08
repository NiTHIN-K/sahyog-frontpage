import './App.css';
import sahyog_logo from './sahyog_logo.png';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Home from './Home.js';
import PartnersCoverage from './PartnersCoverage.js';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <header className="App-header">
        <div className='left-header'>
          <img className='sahyog-logo' src={sahyog_logo} alt="sahyog-logo" />
          <div className='title'>Sahyog</div>
        </div>
        <div className='right-header'>
          <Link className='header-item' to="/">Home</Link>
          <Link className='header-item' to="/partners-coverage">Partners & Coverage</Link>
          <Link className='header-item' to="/about-us">About Us</Link>
          <Link className='header-item' to="/contact">Contact</Link>
        </div>
      </header>
      <div className="App">
        <Routes>
          <Route path="/partners-coverage" element={<PartnersCoverage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
