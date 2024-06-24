// src/components/About.js
import React from 'react';
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiPostgresql, DiDocker, DiGit } from 'react-icons/di';
import { SiCsharp, SiJenkins, SiJira, SiElasticsearch, SiRedis, SiPostman, SiVisualstudiocode } from 'react-icons/si'; // Import C#, Jenkins, Jira, Elasticsearch, Redis, SOAP (using VS Code as a placeholder), and RestAPI
import { FaUnity } from 'react-icons/fa';

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
            <div className="skillItem"><DiReact size={70} /><span>React</span></div>
            <div className="skillItem"><DiNodejsSmall size={70} /><span>Node.js</span></div>
            <div className="skillItem"><DiJavascript1 size={70} /><span>JavaScript</span></div>
            <div className="skillItem"><DiPostgresql size={70} /><span>PostgreSQL</span></div>
            <div className="skillItem"><DiHtml5 size={70} /><span>HTML</span></div>
            <div className="skillItem"><DiCss3 size={70} /><span>CSS</span></div>
            <div className="skillItem"><DiDocker size={70} /><span>Docker</span></div>
            <div className="skillItem"><DiGit size={70} /><span>Git</span></div>
            <div className="skillItem"><FaUnity size={70} /><span>Unity</span></div>
            <div className="skillItem"><SiCsharp size={70} /><span>C#</span></div>
            <div className="skillItem"><SiPostman size={70} /><span>RestAPI/SOAP</span></div>
            <div className="skillItem"><SiElasticsearch size={70} /><span>Elasticsearch</span></div>
            <div className="skillItem"><SiJira size={70} /><span>Jira</span></div>
            <div className="skillItem"><SiRedis size={70} /><span>Redis</span></div>
            <div className="skillItem"><SiJenkins size={70} /><span>Jenkins</span></div>
            <div className="skillItem"><SiVisualstudiocode size={70} /><span>Visual Studio Code</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
