import React from 'react';
import './App.css';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}

export default App;
