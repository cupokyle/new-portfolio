// src/components/FeaturedProject.js
import React from 'react';
import './FeaturedProject.css'; // make sure this file exists and is imported in your main CSS build

/**
 * FeaturedProject component now supports both static images and animated GIFs/videos.
 * Props:
 *  - title: string
 *  - description: string
 *  - mediaUrl: string (image or GIF URL)
 *  - isVideo: boolean (if true, renders a <video> element)
 *  - projectLink: string (URL to live app)
 *  - features: array of strings (key bullet points)
 */
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
          <h2>Featured Project</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          {features?.length && (
            <ul className="featured-features">
              {features.map((feat, idx) => <li key={idx}>{feat}</li>)}
            </ul>
          )}
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn">
            View Live App
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;