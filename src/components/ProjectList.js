// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
