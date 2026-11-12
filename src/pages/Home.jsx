import { ArrowRight, CheckCircle2, Gauge, Layers3, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';
import PageTransition from '../components/PageTransition';
import PricingCard from '../components/PricingCard';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { pricingPlans } from '../data/pricing';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { buildCallLink, buildEmailLink } from '../utils/contact';

function usePageMeta() {
  const title = 'TechoraDev | Building Digital Solutions for Businesses';
  const description = 'TechoraDev builds modern websites and custom digital systems for small businesses, startups and growing companies.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

const trustPoints = [
  { icon: Gauge, title: 'Efficient delivery', text: 'Built with clarity, speed and business-minded priorities.' },
  { icon: ShieldCheck, title: 'Reliable support', text: 'A practical partner for maintenance and long-term success.' },
  { icon: Lightbulb, title: 'Smart strategy', text: 'Solutions that balance performance, usability and growth.' },
];

const processSteps = [
  { step: '01', title: 'Discover', text: 'We learn your goals, challenges and target audience.' },
  { step: '02', title: 'Design', text: 'We craft a modern digital experience with a clear user journey.' },
  { step: '03', title: 'Develop', text: 'We build the product with clean, scalable implementation.' },
  { step: '04', title: 'Launch', text: 'We hand over a polished solution ready to grow with you.' },
];

const faqs = [
  {
    question: 'Do you work with small businesses and startups?',
    answer: 'Yes. TechoraDev supports businesses at different stages, from early-stage startups to established local brands ready for a stronger digital presence.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer: 'Absolutely. We can refresh outdated websites, improve the user journey and modernise the visual design and structure.',
  },
  {
    question: 'Do you build custom web applications?',
    answer: 'Yes. We design and develop practical internal tools, portals, admin panels and workflow-based web applications tailored to your operations.',
  },
  {
    question: 'What is the typical project process?',
    answer: 'We usually begin with discovery, move into design and implementation, and then finalise launch with testing and support guidance.',
  },
];

export default function Home() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page page-home">
        <section className="hero-section container section-spacing">
          <div className="hero-copy">
            <span className="eyebrow">TechoraDev</span>
            <h1>Build Your Digital Future with TechoraDev.</h1>
            <p>
              We design and develop modern websites and custom web applications
              that help businesses grow.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="button button-primary">
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <a href={buildEmailLink('Free consultation request')} className="button button-ghost">
                Get a Free Consultation
              </a>
            </div>
            <div className="hero-meta">
              <span>Affordable</span>
              <span>Reliable</span>
              <span>User-friendly</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="TechoraDev technology illustration">
            <div className="tech-card card-main">
              <div className="card-topline" />
              <div className="mini-graphs">
                <span />
                <span />
                <span />
              </div>
              <div className="display-block" />
              <div className="display-row" />
            </div>
            <div className="tech-card card-floating card-one">
              <Layers3 size={18} />
              <span>Growth-ready</span>
            </div>
            <div className="tech-card card-floating card-two">
              <Sparkles size={18} />
              <span>Premium UX</span>
            </div>
          </div>
        </section>

        <section className="container section-spacing">
          <div className="section-heading">
            <span className="eyebrow">Why businesses choose us</span>
            <h2>Technology solutions built around real business goals.</h2>
          </div>
          <div className="feature-grid three-columns">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-spacing">
          <div className="section-heading">
            <span className="eyebrow">Our services</span>
            <h2>Digital experiences designed to move your business forward.</h2>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="container section-spacing">
          <div className="section-heading">
            <span className="eyebrow">How we work</span>
            <h2>A straightforward development process for thinking businesses.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-spacing">
          <div className="section-heading">
            <span className="eyebrow">Pricing</span>
            <h2>Flexible packages for different stages of growth.</h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.slice(0, 2).map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section className="container section-spacing">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Innovative digital ideas built to stand out.</h2>
          </div>
          <div className="project-carousel" aria-label="Project showcase carousel">
            <div className="project-carousel-track">
              {[...projects, ...projects].map((project, index) => (
                <div key={`${project.name}-${index}`} className="project-carousel-item">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section-spacing faq-section">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions from growing businesses.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <div className="faq-question">
                  <CheckCircle2 size={18} />
                  <h3>{item.question}</h3>
                </div>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section-spacing">
          <div className="mini-contact-card">
            <div>
              <span className="eyebrow">Speak with TechoraDev</span>
              <h2>Ready to build something valuable?</h2>
            </div>
            <div className="mini-contact-actions">
              <a href={buildCallLink()} className="button button-primary">
                Call Us
              </a>
              <a href={buildEmailLink('Project enquiry')} className="button button-ghost">
                Email Us
              </a>
            </div>
          </div>
        </section>

        <div className="container section-spacing">
          <ContactCTA />
        </div>
      </main>
    </PageTransition>
  );
}
