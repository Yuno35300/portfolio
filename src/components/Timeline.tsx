import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'work';
  parallel?: {
    title: string;
    subtitle: string;
    description: string;
    type: 'education' | 'work';
  };
}

const Timeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2023 - Aujourd'hui",
      title: "BTS SIO SISR",
      subtitle: "ISCB Tours",
      description: "Formation en Services Informatiques aux Organisations, spécialisation Solutions d'Infrastructure, Systèmes et Réseaux.",
      type: "education",
      parallel: {
        title: "Alternance - Technicien Informatique",
        subtitle: "Avenir Domicile",
        description: "Formation en alternance comme technicien informatique, gestion de l'infrastructure et support de type 1 & 2.",
        type: "work"
      }
    },
    {
      year: "2022 - 2023",
      title: "Technicien Support ",
      subtitle: "Entreprise Avenir Domicile",
      description: "Support technique niveau 1 et 2.",
      type: "work"
    },
    {
      year: "2018 - 2019",
      title: "Licence de Psychologie",
      subtitle: "Université Rennes 2 Villejean",
      description: "Première année de licence en psychologie.",
      type: "education"
    },
    {
      year: "2016 - 2018",
      title: "BAC L option LVA",
      subtitle: "Lycée Jean Guehenno à Fougères",
      description: "Baccalauréat série littéraire (Option Langue approfondie).",
      type: "education"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Mon Parcours
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400"></div>

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <div key={index} className="relative mb-24">
                {/* Year marker - Mobile */}
                <div className="md:hidden flex items-center gap-3 mb-4">
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{item.year}</span>
                </div>

                <div className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start gap-8`}>
                  {/* Year marker - Desktop */}
                  <div className={`hidden md:block md:w-1/2 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{item.year}</span>
                  </div>

                  {/* Content cards container */}
                  <div className={`relative ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  } space-y-6`}>
                    {/* Main content card */}
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg
                                  transform transition-all duration-300 hover:shadow-xl
                                  border-t-4 border-indigo-500 dark:border-indigo-400">
                      <div className="flex items-center gap-3 mb-3">
                        {item.type === 'education' ? (
                          <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{item.subtitle}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>

                    {/* Parallel content card if exists */}
                    {item.parallel && (
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg
                                    transform transition-all duration-300 hover:shadow-xl
                                    border-t-4 border-purple-500 dark:border-purple-400
                                    mt-4">
                        <div className="flex items-center gap-3 mb-3">
                          {item.parallel.type === 'education' ? (
                            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          ) : (
                            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          )}
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.parallel.title}</h3>
                        </div>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{item.parallel.subtitle}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.parallel.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;