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
  title: 'Beanbox (working title)',
  description:
    'Beanbox is a scalable, full‑stack React.js collectible mobile game featuring a secure, JWT‑backed authentication and authorization system (email/password signup, password‑reset/forgot flows), a dynamic pack‑opening engine (daily, reward, and promotional packs with configurable rarity distributions), and a responsive, filterable/sortable compendium UI for cataloging and discovering beans.',
  mediaUrl: beanboxGif,           // use your animated demo or swap to beanboxImage
  isVideo: true,                  // set to false for static images/GIFs
  projectLink: 'https://beanbox-frontend.onrender.com/login',
  features: [
    'Frontend: React.js with responsive, mobile-first design',
    'Robust auth: JWT security, password reset, session management',
    'Configurable pack system: multiple pack types with probabilistic rarity models',
    'Real‑time compendium: client‑side filtering, sorting, and pagination of 50+ bean types',
    'Social layer: Bean Bud requests, Bean Showcase for sharing favorites',
    'Customizable profiles: unlockable avatars, and titles',
    'Tiered achievement engine: daily, weekly, and lifetime challenges',
    'Scalable backend: Node.js/Express API, PostgreSQL schema, Dockerized services',
    'Future roadmap: promo bean drops, advanced social interactions, many more beans',
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

