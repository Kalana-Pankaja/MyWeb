import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;