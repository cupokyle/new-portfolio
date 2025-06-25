// ------------------------------------------------------------
// src/components/ProjectItem.js
// Apply --delay CSS variable for staggered animation
// ------------------------------------------------------------
import React from 'react';
import './ProjectList.css';

function ProjectItem({ title, description, imageUrl, projectLink, delay }) {
  return (
    <div className="project-item" style={{ '--delay': `${delay * 0.1}s` }}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-item-link">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectItem;