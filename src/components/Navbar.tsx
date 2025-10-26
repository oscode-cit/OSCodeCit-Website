import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobile}>
          <div className="logo-icon">
            <img src="/logo.webp" alt="OSCode Logo" className="logo-image" />
          </div>
          <span className="logo-text">OSCode CIT</span>
        </Link>
        <button className={`burger ${mobileOpen ? 'open' : ''}`} aria-label="Toggle menu" onClick={toggleMobile}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${mobileOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={closeMobile}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobile}>About Us</Link></li>
          <li><Link to="/events" onClick={closeMobile}>Events</Link></li>
          <li><Link to="/activities" onClick={closeMobile}>Activities</Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
