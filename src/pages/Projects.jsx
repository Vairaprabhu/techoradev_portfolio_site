import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

function usePageMeta() {
  const title = 'TechoraDev';
  const description = 'Explore TechoraDev projects and upcoming digital solutions currently in development.';

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
          <h1>We are working on exciting digital solutions.</h1>
          <p>
            Our completed projects and client success stories will be showcased here soon.
          </p>
        </section>

        <section className="project-grid full-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </main>
    </PageTransition>
  );
}
