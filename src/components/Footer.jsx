import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';
import { companyProfile, buildCallLink, buildEmailLink, buildInstagramLink } from '../utils/contact';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-branding">
          <p>{companyProfile.tagline}</p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get in touch</h3>
          <ul className="contact-list">
            <li>
              <Mail size={15} />
              <a href={buildEmailLink('TechoraDev enquiry')}>techoradev1@gmail.com</a>
            </li>
            <li>
              <Phone size={15} />
              <a href={buildCallLink()}>7708843354</a>
            </li>
            <li>
              <Globe size={15} />
              <a href={buildInstagramLink()} target="_blank" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ready to grow?</h3>
          <p>Book a discovery call and let&apos;s build your next digital win.</p>
          <Link to="/contact" className="text-link">
            Start a conversation <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 TechoraDev. All rights reserved.</span>
        <span>Building digital solutions for businesses.</span>
      </div>
    </footer>
  );
}
