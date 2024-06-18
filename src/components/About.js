// src/components/About.js
import React from 'react';

function About({ bioImage, bioAlt }) {
  const bio1 = "I'm Kyle, a passionate software developer with a love for video games. My journey into coding began with my interest in tabletop RPGs, which first got me fascinated with JavaScript.";
  const bio2 = "Beyond software development, I have rich experience in producing comedy shows and scriptwriting. This blend of creativity and technical expertise defines my approach to projects.";
  const bio3 = "I pride myself on being a creative and an 'Idea guy,' with a wealth of ever-growing ideas for projects I would like to create. When I'm not coding or gaming, you can find me diving into new tabletop adventures or crafting compelling scripts.";

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className='aboutBox'>
      <div className='aboutHalf aboutHalfLeftTop'>
        <div id='bioBox'>
        <img className='bioHalf bioHalfLeft' src={bioImage} alt={bioAlt} />
        <div className='bioHalf bioHalfRight'>
          <h2>Kyle Forsyth</h2>
          <br />
          <h4>Profession:</h4>
          <p>Software Applications Developer</p>
          <br />
          <h4>Recreation:</h4>
          <p>Web App & Game Developer</p>
          <br />
          <h4>Bio:</h4>
          <p>{bio1}</p>
          <br />
          <p>{bio2}</p>
          <br />
          <p>{bio3}</p>
        </div>
        </div>
      </div>
      <div className='aboutHalf aboutHalfRightBottom'>
        <h2>Top Skills</h2>
        <div id='skillGrid'>

        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
