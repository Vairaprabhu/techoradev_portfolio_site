import { useMemo } from 'react';
import { Building2, Mail, Phone, UserCircle2 } from 'lucide-react';
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

export default function Contact() {
  usePageMeta();

  const contactDetails = useMemo(
    () => [
      { label: 'TechoraDev', value: companyProfile.name, href: null },
      { label: 'Email', value: companyProfile.email, href: buildEmailLink('TechoraDev enquiry') },
      { label: 'Phone', value: companyProfile.phoneDisplay, href: buildCallLink() },
      { label: 'Instagram', value: 'Instagram', href: buildInstagramLink() },
    ],
    [],
  );

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
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
