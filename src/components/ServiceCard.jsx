import { motion } from 'framer-motion';
import {
  BarChart3,
  Layers3,
  MonitorSmartphone,
  Palette,
  ShoppingCart,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { buildWhatsAppLink } from '../utils/contact';

const iconMap = {
  MonitorSmartphone,
  Layers3,
  BarChart3,
  ShoppingCart,
  Palette,
  Wrench,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || MonitorSmartphone;

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
    >
      <div className="service-icon">
        <Icon size={20} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.items.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a
        href={buildWhatsAppLink(service.title)}
        target="_blank"
        rel="noreferrer"
        className="inline-link"
      >
        Enquire now
        <ArrowRight size={15} />
      </a>
    </motion.article>
  );
}
