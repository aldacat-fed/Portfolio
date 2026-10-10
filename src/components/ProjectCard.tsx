import { motion } from "motion/react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, tags, repo, demo } = project;
  return (
    <motion.article
      className="card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-img">
        <img src={image} alt={`Skärmbild av ${title}`} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="chips small">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="links">
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Repo ↗
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}