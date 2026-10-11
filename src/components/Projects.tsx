import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

// Unika taggar hämtas från datan
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  function toggleTag(tag: string) {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag) 
        : [...selectedTags, tag], 
    );
  }

  // Räknas fram vid rendering, sparas inte i eget state. Projektet matchar om det har NÅGON vald tagg.
  const visible =
    selectedTags.length === 0
      ? projects
      : projects.filter((p) => p.tags.some((t) => selectedTags.includes(t)));

  return (
    <section id="projekt" className="section">
      <Reveal>
        <h2>
          <span>02</span> Projekt
        </h2>
        <FilterBar
          tags={allTags}
          selectedTags={selectedTags}
          onToggle={toggleTag}
          onClear={() => setSelectedTags([])}
        />
      </Reveal>
      <div className="grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
