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

function App() {
  // Sample project data
  const projects = [
    { id: 1, title: 'Wedding Website', description: 'Description of Project 1', imageUrl: weddingImage },
    { id: 2, title: 'What Now?', description: 'Description of Project 2', imageUrl: whatNowImage },
    { id: 3, title: 'Tweeter', description: 'Description of Project 3', imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, title: 'Rude Dude Blackjack', description: 'Description of Project 4', imageUrl: blackjackImage },
    { id: 5, title: 'AirCall', description: 'Description of Project 5', imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, title: 'Unity Game?', description: 'Description of Project 6', imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
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

