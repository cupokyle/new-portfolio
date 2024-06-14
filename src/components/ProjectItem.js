import React from 'react';

function ProjectItem({ title, description, imageUrl, projectLink }) {
  return (
      <div className="project-item">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-item-link">
          <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </div>
  );
}

export default ProjectItem;