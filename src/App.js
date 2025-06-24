// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import FeaturedProject from './components/FeaturedProject';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Make sure to create an App.css file for styling

// Images
import weddingImage from './images/weddin-screen.png';
import blackjackImage from './images/blackjack-screen.png';
import whatNowImage from './images/wnow-screen.png';
import tweeterImage from './images/tweeter-screen.png';
import snipeImage from './images/snipe-screen.png';
import bioImage from './images/bioImage.png';
import chutesImage from './images/chutesImage.png';
// import beanboxImage from './images/beanbox-screen.png';
import beanboxGif from './images/beanbox-demo.mp4';

function App() {

  // Bio data
  const bioAlt='Photo of Kyle, a software developer, smiling and looking at the camera, with a professional and friendly demeanor.';
  // Sample project data
  const projects = [
    { id: 1, title: 'Wedding Website', description: 'A Wedding Information Website - Created from scratch. Includes RSVP system powered by Cognito Forms', imageUrl: weddingImage, projectLink: 'https://beautifulwedding.netlify.app' },
    { id: 2, title: 'What Now?', description: 'A Choose-your-own-Adventure game the uses generative AI to progress the story', imageUrl: whatNowImage, projectLink: 'https://wnow.netlify.app/'  },
    { id: 3, title: 'Tweeter', description: 'A simple Twitter clone - Created as a React.js practise app to improve Front-end skills', imageUrl: tweeterImage, projectLink: 'https://walrus-app-pu4up.ondigitalocean.app/'  },
    { id: 4, title: 'Rude Dude Blackjack', description: 'A basic Blackjack game made slightly more irritating by a very rude dude. Made with React.js', imageUrl: blackjackImage, projectLink: 'https://rudedudeblackjack.netlify.app/'  },
    { id: 5, title: 'Snipe Snacks', description: 'A game created in Unity - similar to Fruit Ninja', imageUrl: snipeImage, projectLink: 'https://play.unity.com/mg/other/snipe-snacks'  },
    { id: 6, title: 'Chutes & Ladders', description: 'A very basic chutes and ladders browser game, made with JavaScript, HTML, and CSS', imageUrl: chutesImage, projectLink: 'https://ladders.netlify.app/'  },
  ];

  const featuredProject = {
    title: 'Beanbox',
    description:
      'A dynamic, pack-opening bean-collector game built with React, Node.js, PostgreSQL, and Docker. Features daily pack accumulation, rarity-based reveals, and a new-badge tracking system.',
    mediaUrl: beanboxGif,           // swap to beanboxImage for static screenshot
    isVideo: true,                  // set false if using a static image
    projectLink: 'https://beanbox-frontend.onrender.com/login',
    features: [
      'Daily pack accumulation system',
      'Rarity-based reveal animations',
      '“New” badge tracking for unseen beans',
      'Real-time backend integration with PostgreSQL',
    ],
  };

  return (
    <div className="App">
      <Header />
      <main>
      <div id="animation-section">
  <h1 className="title">Kyle Forsyth Web Development</h1>
  <div className="animation-box"></div>
</div>
        <FeaturedProject {...featuredProject} />
        <ProjectList projects={projects} />
        <About bioImage={bioImage} bioAlt={bioAlt} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

