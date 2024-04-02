// src/components/ProjectItem.js
import React from 'react';

function ProjectItem({ title, description, imageUrl }) {
  return (
    <div className="project-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItem;
