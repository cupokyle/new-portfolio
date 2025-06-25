// src/components/FeaturedProject.js
import React from 'react';
import './FeaturedProject.css'; // CSS includes fade-in animations

function FeaturedProject({ title, description, mediaUrl, isVideo = false, projectLink, features }) {
  return (
    <section id="featured-project" className="featured-project">
      <div className="featured-content container">
        <div className="featured-media">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            {isVideo ? (
              <video
                src={mediaUrl}
                autoPlay
                loop
                muted
                defaultMuted
                playsInline
                className="media-element"
              />
            ) : (
              <img src={mediaUrl} alt={title} className="media-element" />
            )}
          </a>
        </div>
        <div className="featured-details">
          <h2>Currently Building:</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          {features?.length && (
            <ul className="featured-features">
              {features.map((feat, idx) => <li key={idx}>{feat}</li>)}
            </ul>
          )}
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn">
            Try it out!
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;