import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
    >
      <div className="project-card-header">
        <span className="project-badge">{project.status === 'coming-soon' ? 'Coming Soon' : 'Featured'}</span>
        <Sparkles size={16} />
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.accent}</span>
      </div>
      <div className="project-link-wrap">
        <span className="inline-link">
          Learn more
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.article>
  );
}
