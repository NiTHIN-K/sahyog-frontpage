import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './sahyog_logo.png';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Home from './Home';
import PartnersCoverage from './PartnersCoverage';

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <header className="site-header">
          <Link className="brand" to="/" aria-label="Sahyog home">
            <img src={logo} alt="Sahyog" />
            <span>Sahyog</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link to="/">Home</Link>
            <Link to="/partners-coverage">Network</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners-coverage" element={<PartnersCoverage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>Concept frontpage for a unified parcel-network vision.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
