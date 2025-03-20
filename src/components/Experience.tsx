import React, { useState } from 'react';
import { Calendar, Server, Shield, Network, Cloud, Terminal, Database, Settings, Users, BookOpen, X, FileDown } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
  details: string;
  pdfUrl: string;
}

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDownloadError = (e: React.SyntheticEvent<HTMLAnchorElement, Event>) => {
    e.preventDefault();
    alert("Le fichier PDF n'est pas encore disponible. Il sera bientôt ajouté.");
  };

  const experiences: Project[] = [
    {
      title: "Infrastructure Windows Server",
      company: "Projet BTS",
      period: "2024",
      description: "Mise en place d'une infrastructure complète Windows Server avec Active Directory, DNS, DHCP et stratégies de groupe.",
      icon: Server,
      details: "Ce projet a consisté en la mise en place d'une infrastructure Windows Server complète comprenant :\n\n- Installation et configuration de Windows Server 2019\n- Déploiement d'Active Directory\n- Configuration des services DNS et DHCP\n- Mise en place des stratégies de groupe (GPO)\n- Documentation complète de l'infrastructure",
      pdfUrl: "/files/projets/windows-server.pdf"
    },
    {
      title: "Haproxy sous Linux",
      company: "Projet BTS",
      period: "2025",
      description: "Déploiement et configuration d'un pare-feu d'entreprise, mise en place de VPN et politique de sécurité.",
      icon: Shield,
      details: "Projet de sécuri(sation du réseau d'entreprise incluant :\n\n- Audit de sécurité initial\n- Installation et configuration du pare-feu\n- Mise en place d'un VPN site-à-site\n- Définition des politiques de sécurité\n- Formation des utilisateurs",
      pdfUrl: "/files/projets/Haproxy.pdf"
    },
    {
      title: "Vagrant",
      company: "Projet BTS",
      period: "2024",
      description: "Création d'environnement de teste grace à l'outil de vagrant.",
      icon: Cloud,
      details: "Utilisation de Vagrant pour des créations de labo cyber ou pour 'autre projet d'études",
      pdfUrl: "/files/projets/Vagrant.pdf"
    },
    {
      title: "Administration Linux",
      company: "Projet ISCB",
      period: "2024",
      description: "Création d'un eco système linux afin de configurer un DHCP et mise en place d'un agent relay.",
      icon: Terminal,
      details: " \n\n-mise en place d'un environnement Linux servant à configurer un serveur DHCP (Dynamic Host Configuration Protocol) pour l'attribution automatique d'adresses IP sur un réseau.\n-Elle inclut également le déploiement d'un agent relais DHCP, qui permet de relayer les requêtes DHCP entre différents sous-réseaux lorsque le serveur DHCP n'est pas situé sur le même segment réseau que les clients.",
      pdfUrl: "/files/Relay-Linux.pdf"
    },
    {
      title: "Architecture Réseau",
      company: "BTS SIO",
      period: "2023",
      description: "Conception et implémentation d'une architecture réseau complète avec VLANs, routage et QoS.",
      icon: Network,
      details: "Conception d'une architecture réseau comprenant :\n\n- Segmentation en VLANs\n- Configuration du routage\n- Mise en place de la QoS\n- Sécurisation des accès\n- Documentation technique",
      pdfUrl: "/files/projets/architecture-reseau.pdf"
    },
    {
      title: "Supervision du Parc informatique",
      company: "Projet Entreprise",
      period: "2023",
      description: "Mise en place d'outils de supervision GLPI et Wazuh pour le monitoring d'infrastructure.",
      icon: Settings,
      details: "Projet de supervision incluant :\n\n- Installation de Nagios et Zabbix\n- Configuration des sondes\n- Mise en place des alertes\n- Création de tableaux de bord\n- Formation des administrateurs",
      pdfUrl: "/files/projets/supervision.pdf"
    },
    {
      title: "GLPI sous debian 12",
      company: "Projet Personnel",
      period: "2025",
      description: "GLPI sur debian 12.",
      icon: Cloud,
      details: "Installation d'un GLPI sur une debian 12 en ligne de commande",
      pdfUrl: "/files/projets/Glpidebian12.pdf"
    },
    {
      title: "Support Utilisateurs",
      company: "Stage",
      period: "2023",
      description: "Gestion du support niveau 1 et 2, résolution d'incidents et assistance utilisateurs.",
      icon: Users,
      details: "Mission de support utilisateurs incluant :\n\n- Gestion des tickets\n- Résolution des incidents\n- Formation des utilisateurs\n- Rédaction de procédures\n- Amélioration continue du service",
      pdfUrl: "/files/projets/support-utilisateurs.pdf"
    },
    {
      title: "Documentation Technique",
      company: "BTS SIO",
      period: "2023",
      description: "Création de documentation technique détaillée pour les procédures d'exploitation et maintenance.",
      icon: BookOpen,
      details: "Projet de documentation comprenant :\n\n- Rédaction de procédures\n- Création de schémas techniques\n- Documentation des configurations\n- Guides utilisateurs\n- Base de connaissances",
      pdfUrl: "/files/projets/documentation.pdf"
    },
    {
      title: "Sauvegarde et Restauration",
      company: "Projet BTS",
      period: "2023",
      description: "Implémentation d'une stratégie de sauvegarde et restauration avec Veeam Backup.",
      icon: Database,
      details: "Projet de sauvegarde incluant :\n\n- Configuration de Veeam Backup\n- Définition des politiques de sauvegarde\n- Tests de restauration\n- Documentation des procédures\n- Formation des administrateurs",
      pdfUrl: "/files/projets/sauvegarde.pdf"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="text-indigo-500 dark:text-indigo-400" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <button
                  onClick={() => setSelectedProject(exp)}
                  className="w-full bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                >
                  Voir les détails
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <selectedProject.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.company} - {selectedProject.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-6">
                {selectedProject.details.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href={selectedProject.pdfUrl}
                onClick={handleDownloadError}
                className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                <FileDown size={20} />
                Télécharger la documentation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
