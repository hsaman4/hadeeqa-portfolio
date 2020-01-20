import React from 'react';
import './App.css';
import Header from './components /Header'
import About from './components /About'
import Contact from './components /Contact'
import Projects from './components /Projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
