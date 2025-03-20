import React from 'react';
import { Server, Shield, Network, Terminal, Database, Cloud } from 'lucide-react';
import SkillsDownload from './SkillsDownload';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      skills: ["Windows Server", "Linux", "VMware", "Active Directory"]
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Réseaux",
      skills: ["TCP/IP", "VLAN", "Routage", "Switching"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité",
      skills: ["Firewall", "VPN", "Cryptographie", "Supervision"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Virtualisation",
      skills: ["VMWare", "Vagrant", "Docker", "Virtual box"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 text-transparent bg-clip-text">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <SkillsDownload />
      </div>
    </section>
  );
};

export default Skills;