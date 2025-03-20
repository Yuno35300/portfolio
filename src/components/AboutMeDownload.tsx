import React from 'react';
import { FileDown } from 'lucide-react';

const AboutMeDownload = () => {
  const handleDownloadError = (e: React.SyntheticEvent<HTMLAnchorElement, Event>) => {
    e.preventDefault();
    alert("Le fichier PDF n'est pas encore disponible. Il sera bientôt ajouté.");
  };

  return (
    <div className="mt-8 text-center">
      <a
        href="/files/cv-kylian-cheroret.pdf"
        onClick={handleDownloadError}
        className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white 
                 px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
      >
        <FileDown className="w-5 h-5" />
        <span>Télécharger mon CV</span>
      </a>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
        Format PDF - CV détaillé de mes expériences et formations
      </p>
    </div>
  );
};

export default AboutMeDownload