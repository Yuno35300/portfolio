import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <span className="text-indigo-600 dark:text-indigo-400">Cheroret Kylian</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              Étudiant en BTS SIO SISR
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Passionné par les nouvelles technologies, je suis une personne dynamique, créative et méthodique. Depuis plusieurs années, je me suis orienté vers ce domaine en constante évolution,  dans lequel je trouve un épanouissement total.
Le portfolio que vous trouverez ci-joint présente les détails de mon parcours académique, mes compétences, mes centres d'intérêt et mes réalisations.
Je vous souhaite une agréable lecture !
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                Me Contacter
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:votre.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=600"
              alt="Data Center"
              className="rounded-lg w-64 h-64 md:w-96 md:h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;