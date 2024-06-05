import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import About from './component/About';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Title/>
      <section id="about_section">
        <About/>
      </section>
      <section id="skill_section">
        <Skills/>
      </section>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
