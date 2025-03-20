import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Rss, Bell, Twitter, Linkedin, Youtube, MessageSquare, Shield } from 'lucide-react';

interface TechItem {
  id: number;
  logo: string;
  title: string;
  description: string;
  details: string;
  categories?: string[];
  socialPlatforms?: {
    name: string;
    items: string[];
    description?: string;
  }[];
  platforms?: {
    name: string;
    description: string;
  }[];
}

const TechWatch = () => {
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techItems: TechItem[] = [
    {
      id: 1,
      logo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=200&fit=crop",
      title: "Flux RSS Tech",
      description: "Veille technologique via flux RSS",
      details: "Suivi quotidien des actualités tech via les flux RSS suivants :\n\n" +
        "• BUSINESS\n" +
        "• CLOUD\n" +
        "• DATACENTER\n" +
        "• EMPLOI\n" +
        "• HARDWARE\n" +
        "• INTERNET\n" +
        "• JURIDIQUE\n" +
        "• LOGICIEL\n" +
        "• MOBILITÉ\n" +
        "• OS\n" +
        "• PME\n" +
        "• RÉSEAU\n" +
        "• SÉCURITÉ\n" +
        "• SERVICES IT\n" +
        "• STOCKAGE\n" +
        "• TÉLÉCOMS\n" +
        "• VIRTUALISATION"
    },
    {
      id: 2,
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=200&h=200&fit=crop",
      title: "Alertes Google",
      description: "Google Alerts est un service gratuit qui permet de recevoir des notifications par email dès qu'un sujet spécifique est mentionné sur Internet.",
      details: "Alertes en temps réel sur les sujets suivants :",
      categories: [
        "Réseaux & Infrastructure",
        ["Réseaux informatique", "Virtualisation de réseau", "5G Réseaux", "Wi-fi 6", "SD-WAN"],
        "Certifications & Standards",
        ["Cisco Certification"],
        "Sécurité & Protection",
        ["Cybersécurité", "Zero-day Exploit", "DDOS", "Cryptographie", "Phishing"],
        "Maintenance & Mises à jour",
        ["Mises à jour des logiciels de sécurité"],
        "Menaces & Risques",
        ["cyberattaque et réseau informatique"],
        "Cloud & Services",
        ["Cloud et cybersécurité IT"]
      ]
    },
    {
      id: 3,
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
      title: "Réseaux Sociaux",
      description: "Veille active sur les principales plateformes sociales pour suivre les dernières tendances et actualités tech.",
      details: "Plateformes de veille sociale",
      socialPlatforms: [
        {
          name: "Twitter (X)",
          description: "Suivi en temps réel des actualités et discussions tech",
          items: [
            "#CyberSecurity", "#InfoSec", "#NetworkSecurity", "#CloudComputing", "#5G", "#Virtualization",
            "@ANSSI_FR", "@ZDNetFrance", "@KrebsOnSecurity", "@Cisco", "@CyberScoopNews"
          ]
        },
        {
          name: "LinkedIn",
          description: "Réseau professionnel et groupes spécialisés",
          items: [
            "Cyber Security Hub", "Network Engineers & IT Professionals", "Cloud Computing & Security",
            "Réseaux et Sécurité Informatique", "Cisco Networking Academy", "Palo Alto Networks", "Microsoft Security"
          ]
        },
        {
          name: "YouTube",
          description: "Chaînes techniques et tutoriels",
          items: [
            "NetworkChuck", "The Cyber Mentor", "TechWorld with Nana", "Korben"
          ]
        },
        {
          name: "Reddit & Discord",
          description: "Communautés et forums spécialisés",
          items: [
            "r/cybersecurity", "r/netsec", "r/networking", "r/hacking", "r/CloudComputing",
            "Discord TryHackMe", "Discord Hack The Box"
          ]
        }
      ]
    },
    {
      id: 4,
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop",
      title: "Micode",
      description: "Vulgarisation cybersécurité et tech",
      details: "Chaîne YouTube française animée par Michaël Buffet, spécialisée dans la vulgarisation de sujets techniques liés à la cybersécurité, au développement et aux technologies. Micode propose des enquêtes approfondies sur des incidents de sécurité, des analyses techniques et des explications accessibles sur des sujets complexes du monde informatique."
    },
    {
      id: 5,
      logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200&h=200&fit=crop",
      title: "Plateformes Spécialisées",
      description: "Outils de surveillance et bases de données de sécurité",
      details: "Plateformes de veille spécialisée en cybersécurité",
      platforms: [
        {
          name: "Shodan",
          description: "Moteur de recherche pour les appareils connectés à Internet. Permet de surveiller l'exposition des systèmes et de détecter des vulnérabilités potentielles dans l'infrastructure."
        },
        {
          name: "CVE Details",
          description: "Base de données complète des vulnérabilités connues (CVE). Permet de suivre les dernières failles de sécurité découvertes et d'évaluer les risques pour les systèmes."
        },
        {
          name: "Exploit-DB",
          description: "Archive des exploits publics et des vulnérabilités. Essentiel pour comprendre les menaces actuelles et les méthodes d'attaque potentielles."
        }
      ]
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = techItems.length - itemsPerPage;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getSocialIcon = (platformName: string) => {
    switch (platformName) {
      case 'Twitter (X)':
        return <Twitter className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'YouTube':
        return <Youtube className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Reddit & Discord':
        return <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="tech-watch" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Ma Veille Technologique
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0 || isAnimating}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 
                     p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                     disabled:opacity-50 disabled:cursor-not-allowed z-10
                     ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {techItems.map((item) => (
                <div
                  key={item.id}
                  className="w-1/4 flex-shrink-0 px-3"
                >
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center 
                             transition-all hover:scale-105 hover:shadow-lg group"
                  >
                    <div className="w-20 h-20 mb-4 overflow-hidden rounded-full">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 
                                 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {item.title}
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex || isAnimating}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 
                     p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                     disabled:opacity-50 disabled:cursor-not-allowed z-10
                     ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index
                    ? 'bg-indigo-600 dark:bg-indigo-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  {selectedItem.id === 1 ? (
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                      <Rss className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  ) : selectedItem.id === 2 ? (
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                      <Bell className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  ) : selectedItem.id === 5 ? (
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                      <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 overflow-hidden rounded-lg">
                      <img
                        src={selectedItem.logo}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                {selectedItem.id === 1 ? (
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {selectedItem.details.split('\n').map((line, index) => {
                      if (!line.trim()) return null;
                      
                      if (index === 0) {
                        return (
                          <div key={index} className="col-span-2 text-gray-900 dark:text-white font-medium mb-4">
                            {line}
                          </div>
                        );
                      }
                      
                      return (
                        <div 
                          key={index}
                          className={`${index === 1 ? 'col-span-2' : ''} ${
                            line.startsWith('•') ? 'text-gray-700 dark:text-gray-300 pl-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors' : 'font-medium'
                          }`}
                        >
                          {line}
                        </div>
                      );
                    })}
                  </div>
                ) : selectedItem.id === 2 && selectedItem.categories ? (
                  <div className="space-y-4">
                    <p className="text-gray-900 dark:text-white font-medium mb-4">{selectedItem.details}</p>
                    <div className="grid gap-4">
                      {selectedItem.categories.reduce((acc: JSX.Element[], item, index) => {
                        if (typeof item === 'string') {
                          acc.push(
                            <div key={index} className="border-b dark:border-gray-700 pb-2">
                              <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                                {item}
                              </h4>
                            </div>
                          );
                        } else if (Array.isArray(item)) {
                          acc.push(
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 mb-6">
                              {item.map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full flex-shrink-0"></div>
                                  <span className="text-sm">{subItem}</span>
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return acc;
                      }, [])}
                    </div>
                  </div>
                ) : selectedItem.socialPlatforms ? (
                  <div className="space-y-6">
                    <p className="text-gray-900 dark:text-white font-medium">{selectedItem.details}</p>
                    {selectedItem.socialPlatforms.map((platform, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          {getSocialIcon(platform.name)}
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {platform.name}
                          </h4>
                        </div>
                        {platform.description && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {platform.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {platform.items.map((item, itemIndex) => (
                            <span
                              key={itemIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm
                                       bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : selectedItem.platforms ? (
                  <div className="space-y-6">
                    <p className="text-gray-900 dark:text-white font-medium mb-6">{selectedItem.details}</p>
                    {selectedItem.platforms.map((platform, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {platform.name}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {platform.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedItem.details}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechWatch;