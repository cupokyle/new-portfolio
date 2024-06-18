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
import bioImage from './images/bioImage.png';

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
    { id: 6, title: 'A Picture of Two Cute Puppies', description: 'Just a picture I found online of some cute little puppies', imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', projectLink: ''  },
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
        <About bioImage={bioImage} bioAlt={bioAlt}/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

