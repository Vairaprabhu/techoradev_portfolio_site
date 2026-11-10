import { useMemo, useState } from 'react';
import { ArrowRight, Building2, CheckCircle2, Mail, Phone, Send, UserCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { buildCallLink, buildEmailLink, buildInstagramLink, companyProfile } from '../utils/contact';

function usePageMeta() {
  const title = 'Contact | TechoraDev';
  const description = 'Contact TechoraDev for website design, custom development and digital growth support.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

const initialState = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  usePageMeta();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [mailtoLink, setMailtoLink] = useState('');

  const contactDetails = useMemo(
    () => [
      { label: 'TechoraDev', value: companyProfile.name, href: null },
      { label: 'Email', value: companyProfile.email, href: buildEmailLink('TechoraDev enquiry') },
      { label: 'Phone', value: companyProfile.phoneDisplay, href: buildCallLink() },
      { label: 'Instagram', value: 'Instagram', href: buildInstagramLink() },
    ],
    [],
  );

  const validate = (values) => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!values.businessName.trim()) nextErrors.businessName = 'Please enter your business name.';
    if (!values.email.trim() || !/\S+@\S+\.\S+/.test(values.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!values.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    if (!values.message.trim()) nextErrors.message = 'Please write a short message.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ type: 'error', message: 'Please review the highlighted fields and try again.' });
      return;
    }

    const emailBody = `Name: ${formData.name}\nBusiness Name: ${formData.businessName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const nextMailto = buildEmailLink('TechoraDev enquiry', emailBody);

    setMailtoLink(nextMailto);
    setStatus({
      type: 'success',
      message: 'Your form is validated and ready to send. Use the email fallback below to deliver the message.',
    });
    setErrors({});
    setFormData(initialState);
  };

  return (
    <PageTransition>
      <main className="page container section-spacing">
        <section className="page-intro">
          <span className="eyebrow">Contact</span>
          <h1>Let’s build the right digital solution for your business.</h1>
          <p>
            Reach out for a website, application, redesign or growth-focused digital project.
          </p>
        </section>

        <section className="contact-layout">
          <div className="contact-panel">
            <h3>Contact details</h3>
            <ul className="contact-list detail-list">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  {item.label === 'Email' && <Mail size={16} />}
                  {item.label === 'Phone' && <Phone size={16} />}
                  {item.label === 'Instagram' && <UserCircle2 size={16} />}
                  {item.label === 'TechoraDev' && <Building2 size={16} />}
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                      {item.label === 'TechoraDev' ? item.value : item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-panel form-panel">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field-grid">
                <label>
                  <span>Name</span>
                  <input id="contact-name" type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} className={errors.name ? 'input-error' : ''} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
                  {errors.name && <small id="contact-name-error">{errors.name}</small>}
                </label>

                <label>
                  <span>Business Name</span>
                  <input id="contact-business-name" type="text" name="businessName" autoComplete="organization" required value={formData.businessName} onChange={handleChange} className={errors.businessName ? 'input-error' : ''} aria-invalid={Boolean(errors.businessName)} aria-describedby={errors.businessName ? 'contact-business-name-error' : undefined} />
                  {errors.businessName && <small id="contact-business-name-error">{errors.businessName}</small>}
                </label>

                <label>
                  <span>Email</span>
                  <input id="contact-email" type="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={errors.email ? 'input-error' : ''} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
                  {errors.email && <small id="contact-email-error">{errors.email}</small>}
                </label>

                <label>
                  <span>Phone</span>
                  <input id="contact-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" required value={formData.phone} onChange={handleChange} className={errors.phone ? 'input-error' : ''} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'contact-phone-error' : undefined} />
                  {errors.phone && <small id="contact-phone-error">{errors.phone}</small>}
                </label>
              </div>

              <label className="full-width">
                <span>Message</span>
                <textarea id="contact-message" name="message" required value={formData.message} onChange={handleChange} rows="5" className={errors.message ? 'input-error' : ''} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
                {errors.message && <small id="contact-message-error">{errors.message}</small>}
              </label>

              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  <Send size={16} />
                  Send Inquiry
                </button>
                {mailtoLink && (
                  <a href={mailtoLink} className="button button-ghost">
                    Email fallback
                  </a>
                )}
              </div>

              {status.type !== 'idle' && (
                <p className={`form-status ${status.type}`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
                  <span>{status.message}</span>
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
