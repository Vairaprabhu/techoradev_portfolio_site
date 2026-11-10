import PricingCard from '../components/PricingCard';
import PageTransition from '../components/PageTransition';
import { pricingPlans } from '../data/pricing';

function usePageMeta() {
  const title = 'Pricing | TechoraDev';
  const description = 'Review TechoraDev pricing packages for small business websites, professional sites and e-commerce launches.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

export default function Pricing() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page container section-spacing">
        <section className="page-intro">
          <span className="eyebrow">Pricing</span>
          <h1>Simple pricing for growing digital brands.</h1>
          <p>
            Introductory starting prices are listed below. Domain and hosting allowance is included
            for the first year, while second-year renewals and advanced add-ons are billed separately.
          </p>
        </section>

        <section className="pricing-grid large-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
