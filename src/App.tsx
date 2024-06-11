import React from 'react';
import './App.css';
import Title from './component/Title';
import About from './component/About';
import Skills from './component/Skills';
import Portfolios from './component/Portfolios';

function App() {
  var year: number = new Date().getFullYear();

  return (
    <div className="App">
      <Title/>
      <section id="about_section">
        <About/>
      </section>
      <section id="skill_section">
        <Skills/>
      </section>
      <section id="portfolios_section">
        <Portfolios/>
      </section>
      <div className='App-footer'>
        <p>© {year} | All Rights Reserved</p>
      </div>
        
    </div>
  );
}

export default App;
