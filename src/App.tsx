import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import TechWatch from './components/TechWatch';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Timeline />
        <Experience />
        <Skills />
        <TechWatch />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Cheroret Kylian. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;