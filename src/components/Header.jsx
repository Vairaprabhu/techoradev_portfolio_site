import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/contact';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuToggleRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.matchMedia('(min-width: 981px)').matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button-primary mobile-quote"
            href={buildWhatsAppLink('General quote request')}
            target="_blank"
            rel="noreferrer"
          >
            Get a Quote
            <ArrowRight size={16} />
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className="button button-primary hide-mobile"
            href={buildWhatsAppLink('General quote request')}
            target="_blank"
            rel="noreferrer"
          >
            Get a Quote
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            ref={menuToggleRef}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
