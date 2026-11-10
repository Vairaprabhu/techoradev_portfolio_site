import { ArrowRight, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppLink } from '../utils/contact';

export default function ContactCTA({ title = 'Need a tailored digital solution?', description = 'Tell us about your goals and we’ll recommend a smart, practical next step.' }) {
  return (
    <section className="cta-panel">
      <div className="cta-copy">
        <span className="eyebrow">Let&apos;s talk</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <Link to="/contact" className="button button-primary">
          Get a Free Consultation
          <ArrowRight size={16} />
        </Link>
        <a href={buildWhatsAppLink('Custom project consultation')} className="button button-ghost" target="_blank" rel="noreferrer">
          <MessageSquareText size={16} />
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
