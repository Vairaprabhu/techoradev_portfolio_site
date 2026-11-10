import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ project, featured = false }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      className={`project-card${featured ? ' project-card-featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
    >
      <div className="project-preview">
        {imageFailed ? (
          <div className="project-preview-fallback" role="img" aria-label={`${project.name} website preview`}>
            <Sparkles size={28} aria-hidden="true" />
            <span>{project.name}</span>
            <small>Website demo preview</small>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className="project-badge">{project.projectType}</span>
      </div>
      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
          </div>
          <Sparkles className="project-card-icon" size={18} aria-hidden="true" />
        </div>
        <p>{project.description}</p>
        <p className="project-credit">Developed by {project.developedBy}</p>
        <ul className="project-tech-list" aria-label="Technologies used">
          {/* {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))} */}
        </ul>
        <div className="project-link-wrap">
          <a
            href={project.liveUrl}
            className="button button-primary project-live-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
