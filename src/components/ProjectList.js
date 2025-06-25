// ------------------------------------------------------------
// src/components/ProjectList.js
// Add CSS import and delay prop
// ------------------------------------------------------------
import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList({ projects }) {
  return (
    <section id="projects">
      <h2>Other Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <ProjectItem key={project.id} delay={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;