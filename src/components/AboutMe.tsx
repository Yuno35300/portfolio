import React from 'react';
import { GraduationCap, Heart, Server, Shield } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">À Propos de Moi</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Actuellement étudiant en BTS SIO (Services Informatiques aux Organisations), 
                option SISR (Solutions d'Infrastructure, Systèmes et Réseaux), je suis passionné 
                par les nouvelles technologies et je sais que depuis plusieurs années je me 
                destine à travailler dans ce domaine épanouissant.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Formation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      BTS SIO - Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                    <Heart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Passions</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Cybersécurité, Virtualisation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                    <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Spécialités</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Administration système, Réseaux, Cloud Computing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                    <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">En dehors du travail</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Veille technologique, Certifications, Musique et évènementiel
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300">
                Je suis constamment à la recherche de nouveaux défis dans le domaine des 
                infrastructures IT et de la sécurité des systèmes. Mon objectif est de devenir 
                un expert en architecture système et réseau, capable de concevoir et maintenir 
                des infrastructures robustes et sécurisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;