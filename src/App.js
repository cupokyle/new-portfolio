// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Make sure to create an App.css file for styling

// Images
import weddingImage from './images/weddin-screen.png';
import blackjackImage from './images/blackjack-screen.png';
import whatNowImage from './images/wnow-screen.png';
import tweeterImage from './images/tweeter-screen.png';
import snipeImage from './images/snipe-screen.png';

function App() {
  // Sample project data
  const projects = [
    { id: 1, title: 'Wedding Website', description: 'Description of Project 1', imageUrl: weddingImage, projectLink: 'https://beautifulwedding.netlify.app' },
    { id: 2, title: 'What Now?', description: 'Description of Project 2', imageUrl: whatNowImage, projectLink: 'https://wnow.netlify.app/'  },
    { id: 3, title: 'Tweeter', description: 'Description of Project 3', imageUrl: tweeterImage, projectLink: 'https://walrus-app-pu4up.ondigitalocean.app/'  },
    { id: 4, title: 'Rude Dude Blackjack', description: 'Description of Project 4', imageUrl: blackjackImage, projectLink: 'https://rudedudeblackjack.netlify.app/'  },
    { id: 5, title: 'Snipe Snacks', description: 'Description of Project 5', imageUrl: snipeImage, projectLink: 'https://play.unity.com/mg/other/snipe-snacks'  },
    { id: 6, title: 'AirCall', description: 'Description of Project 6', imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', projectLink: ''  },
  ];

  return (
    <div className="App">
      <Header />
      <main>
      <div id="animation-section">
  <h1 className="title">Kyle Forsyth Web Development</h1>
  <div className="animation-box"></div>
</div>

        <ProjectList projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

