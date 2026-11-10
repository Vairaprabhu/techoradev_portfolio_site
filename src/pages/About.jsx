import { Compass, Eye, HeartHandshake, Target } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';
import PageTransition from '../components/PageTransition';

function usePageMeta() {
  const title = 'About | TechoraDev';
  const description = 'Learn about TechoraDev, our mission, vision and the values guiding our work for small businesses and growing brands.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

const values = [
  { icon: Target, title: 'Mission', text: 'To help businesses grow digitally through affordable, reliable and user-friendly technology solutions.' },
  { icon: Eye, title: 'Vision', text: 'To become a trusted technology partner for small businesses, startups and growing companies.' },
  { icon: HeartHandshake, title: 'Values', text: 'We value clarity, trust, thoughtful design and long-term digital growth.' },
  { icon: Compass, title: 'Approach', text: 'Every project is shaped around practical goals, user experience and measurable business value.' },
];

export default function About() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page container section-spacing">
        <section className="page-intro">
          <span className="eyebrow">About us</span>
          <h1>Who We Are</h1>
          <p>
            TechoraDev is a digital agency helping businesses turn ideas into clean,
            modern and effective online experiences.
          </p>
        </section>

        <section className="story-grid">
          <div className="story-card">
            <h3>Company introduction</h3>
            <p>
              We partner with businesses looking for reliable digital solutions that feel
              premium, perform well and support growth. Our focus is on creating technology
              that is clear, usable and aligned with real-world business goals.
            </p>
          </div>
          <div className="story-card highlight">
            <h3>Why choose TechoraDev</h3>
            <p>
              We combine strategic thinking, polished design and practical engineering to
              deliver solutions that are affordable, easy to use and built around your goals.
            </p>
          </div>
        </section>

        <section className="feature-grid four-columns">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
                <Icon size={18} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <div className="section-spacing">
          <ContactCTA title="Let’s build your next business milestone." description="Whether you need a modern website or a custom digital tool, we can help shape the right solution for your goals." />
        </div>
      </main>
    </PageTransition>
  );
}
