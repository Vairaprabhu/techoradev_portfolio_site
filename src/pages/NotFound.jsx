import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function usePageMeta() {
  const title = 'Page Not Found | TechoraDev';
  const description = 'The page you requested could not be found.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

export default function NotFound() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page container section-spacing not-found">
        <div className="not-found-card">
          <span className="eyebrow">404</span>
          <h1>Page not found.</h1>
          <p>The page you are looking for does not exist or may have moved.</p>
          <Link to="/" className="button button-primary">
            <ArrowLeft size={16} />
            Return home
          </Link>
        </div>
      </main>
    </PageTransition>
  );
}
