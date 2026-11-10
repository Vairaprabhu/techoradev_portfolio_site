import { motion } from 'framer-motion';
import { Check, MessageCircleMore } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/contact';

export default function PricingCard({ plan }) {
  return (
    <motion.article
      className="pricing-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
    >
      <div className="pricing-header">
        {plan.recommended && <span className="pricing-tag">Recommended</span>}
        <h3>{plan.name}</h3>
      </div>
      <div className="price-block">
        <span className="currency">₹</span>
        <span className="amount">{plan.price.replace('₹', '')}</span>
      </div>
      <p className="pricing-highlight">{plan.highlight}</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={15} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={buildWhatsAppLink(plan.whatsappContext)}
        target="_blank"
        rel="noreferrer"
        className="button button-primary pricing-button"
      >
        <MessageCircleMore size={16} />
        Enquire Now
      </a>
    </motion.article>
  );
}
