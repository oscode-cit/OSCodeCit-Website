import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? (saved as 'light' | 'dark') : 'light';
  });

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

  useEffect(() => {
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
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
          <li>
            <button className="theme-toggle" onClick={() => { toggleTheme(); }} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
