import { MessageCircleMore } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/contact';

export default function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsAppLink('General project enquiry')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore size={20} />
    </a>
  );
}
