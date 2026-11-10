import ServiceCard from '../components/ServiceCard';
import PageTransition from '../components/PageTransition';
import { services } from '../data/services';

function usePageMeta() {
  const title = 'Services | TechoraDev';
  const description = 'Explore TechoraDev services including website development, custom web apps, SaaS solutions, e-commerce and digital support.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

export default function Services() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page container section-spacing">
        <section className="page-intro">
          <span className="eyebrow">Our services</span>
          <h1>Website and digital solutions built for growth.</h1>
          <p>
            From modern business websites to custom application platforms, we create
            efficient and user-friendly tools that support your next stage of growth.
          </p>
        </section>

        <section className="service-grid full-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
