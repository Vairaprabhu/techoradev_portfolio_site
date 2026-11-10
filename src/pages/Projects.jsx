import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function usePageMeta() {
  const title = 'Projects | TechoraDev';
  const description = 'Explore website demos and digital experiences built by TechoraDev.';

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  if (!document.querySelector('meta[name="description"]')) {
    document.head.appendChild(metaDescription);
  }
}

export default function Projects() {
  usePageMeta();

  return (
    <PageTransition>
      <main className="page container section-spacing">
        <section className="page-intro">
          <span className="eyebrow">Our projects</span>
          <h1>Digital experiences built to explore.</h1>
          <p>
            Explore completed demos that showcase our approach to thoughtful design and development.
          </p>
        </section>

        <section className="project-grid project-grid-featured">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
